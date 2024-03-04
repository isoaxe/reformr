import admin from 'firebase-admin';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { STRIPE_SECRET_KEY, isLocal } from '@/util/constants';
import { STRIPE_INVOICE_WEBHOOK_SECRET } from '@/util/constants';
import { STRIPE_UID, PAYMENT_METHOD_ID } from '@/util/constants';
import { getPatientData } from '@/util/server';
import { startEmulators } from '@/util/firebase';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

/* A webhook to listen for invoice events and update Firestore when heard. */
export async function POST(request) {
  const rawBody = await request.text();
  const signature = headers().get('Stripe-Signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      STRIPE_INVOICE_WEBHOOK_SECRET
    );
    console.log('ℹ️  Webhook signature verified and event created.');
  } catch (err) {
    const failMessage = '⚠️  Webhook signature verification failed.';
    console.log(failMessage, err.message);
    return NextResponse.json({ error: failMessage }, { status: 400 });
  }

  if (isLocal) startEmulators();

  try {
    /* Access Firestore as required for all events. */
    await initialiseAdmin();
    const db = admin.firestore();
    const patientsRef = db.collection('patients');

    /* Get customerId as required for all events. */
    const invoice = event?.data?.object;
    let customerId = invoice?.customer;
    const isCli = invoice?.description === '(created by Stripe CLI)';
    if (isCli) customerId = STRIPE_UID;

    /* Handle the event. Add payment data to Firestore if payment is made. */
    if (event.type === 'invoice.paid') {
      const subscription = await stripe.subscriptions.list({
        customer: customerId,
      });
      let paymentDate, expiryDate;
      if (subscription) {
        /* Assumes only a single subscription active. */
        const { current_period_end } = subscription.data.pop();
        const { created } = invoice;
        paymentDate = new Date(created * 1000);
        expiryDate = new Date(current_period_end * 1000);
      }

      /* Get payments data from Firestore. */
      const { docId, patientData, message } = await getPatientData(customerId);
      if (message) return NextResponse.json({ message }, { status: 202 }); // no patient found
      const { paymentInfo, payments } = patientData;

      /* Save payments data to Firestore if invoice paid. */
      if (invoice.paid) {
        /* Update payments data and add new item to array. */
        const payment = {
          product: 'metabolic reset',
          paymentDate,
          paymentAmount: invoice.amount_paid / 100, // amount in NZD
        };
        payments.push(payment);
        const paymentData = {
          metabolicReset: {
            isPaid: true,
            expiryDate,
            subscription: { isPaused: false },
          },
        };

        /* Update orders data and add new item to array. */
        const { orders } = patientData;
        const order = {
          trackingNumber: '',
          product: 'metabolic reset',
          status: 'pending',
          statusDates: { pending: new Date() },
        };
        orders.push(order);

        /* Save payment and order data to Firestore. */
        await patientsRef
          .doc(docId)
          .set({ paymentInfo: paymentData, payments, orders }, { merge: true });
        console.log('✅ Payment made and data saved to Firestore.');
      } else {
        console.log('❌ Payment was not made.');
      }

      /* Set default payment method for customer if recently created. */
      let { paymentMethodId } = paymentInfo.metabolicReset;
      if (!paymentMethodId) {
        console.log('ℹ️  Payment method not yet saved. Doing so now.');
        const paymentIntentId = invoice.payment_intent;
        const paymentIntent = await stripe.paymentIntents.retrieve(
          paymentIntentId
        );
        paymentMethodId = paymentIntent.payment_method; // card ID in Stripe
        if (isCli) paymentMethodId = PAYMENT_METHOD_ID;
        await stripe.customers.update(customerId, {
          invoice_settings: { default_payment_method: paymentMethodId },
        });
        await patientsRef
          .doc(docId)
          .set(
            { paymentInfo: { metabolicReset: { paymentMethodId } } },
            { merge: true }
          );
        console.log(`✅ Payment method ${paymentMethodId} set as default`);
      }
      return NextResponse.json({ message: 'Payment success' }, { status: 200 });
    }

    if (event.type === 'invoice.payment_failed') {
      console.log('ℹ️  Invoice payment failed.');

      /* Get user data from Firestore. */
      const { docId, message } = await getPatientData(customerId);
      if (message) return NextResponse.json({ message }, { status: 202 }); // no patient found

      /* Set user as unpaid in Firestore. */
      await patientsRef
        .doc(docId)
        .set(
          { paymentInfo: { metabolicReset: { isPaid: false } } },
          { merge: true }
        );
      const failMsg = 'ℹ️  User set as unpaid in Firestore.';
      console.log(failMsg);
      return NextResponse.json({ message: failMsg }, { status: 202 });
    }

    const error = `⚠️  Unhandled event type. ${event.type}`;
    console.log(error);
    return NextResponse.json({ error }, { status: 202 });
  } catch (err) {
    console.log('⚠️  Fatal error in webhook. ', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
