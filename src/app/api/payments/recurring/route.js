import admin from 'firebase-admin';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { STRIPE_SECRET_KEY } from '@/util/constants';
import { STRIPE_INVOICE_WEBHOOK_SECRET } from '@/util/constants';
import { STRIPE_UID, PAYMENT_METHOD_ID, isCli } from '@/util/constants';
import { getUserData } from '@/util/server';

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
    return NextResponse.json({
      success: false,
      status: 400,
      error: failMessage,
    });
  }

  /* Access Firestore as required for all events. */
  await initialiseAdmin();
  const db = admin.firestore();
  const usersPath = db.collection('users');

  /* Get customerId as required for all events. */
  const invoice = event?.data?.object;
  let customerId = invoice?.customer;
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
    const { docId, userData } = await getUserData(customerId);

    /* Save payments data to Firestore if invoice paid. */
    if (invoice.paid) {
      /* Update payments data and add new item to array. */
      const allPaymentData = userData.payments;
      const { payments } = allPaymentData;
      const payment = {
        product: 'metabolic reset',
        paymentDate,
        paymentAmount: invoice.amount_paid / 100, // amount in NZD
      };
      payments.push(payment);
      const paymentData = {
        isPaid: true,
        expiryDate,
        payments,
        subscription: { isPaused: false },
      };

      /* Update orders data and add new item to array. */
      const { orders } = userData;
      const order = {
        trackingNumber: '',
        status: 'pending',
        statusDates: { pending: new Date() },
      };
      orders.push(order);

      /* Save payment and order data to Firestore. */
      await usersPath
        .doc(docId)
        .set({ payments: paymentData, orders }, { merge: true });
      console.log('✅ Payment made and data saved to Firestore.');
    } else {
      console.log('❌ Payment was not made.');
    }

    /* Set default payment method for customer if recently created. */
    let paymentMethodId = allPaymentData?.paymentMethodId;
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
      await usersPath
        .doc(docId)
        .set({ payments: { paymentMethodId } }, { merge: true });
      console.log(`✅ Payment method ${paymentMethodId} set as default`);
    }
    return NextResponse.json({ success: true, status: 200 });
  }

  if (event.type === 'invoice.payment_failed') {
    console.log('ℹ️  Invoice payment failed.');

    /* Get user data from Firestore. */
    const { docId } = await getUserData(customerId);

    /* Set user as unpaid in Firestore. */
    await usersPath
      .doc(docId)
      .set({ payments: { isPaid: false } }, { merge: true });
    console.log('ℹ️  User set as unpaid in Firestore.');
    return NextResponse.json({ success: true, status: 204 });
  }

  console.log(`⚠️  Unhandled event type. ${event.type}`);
  return NextResponse.json({ success: false, status: 204 });
}
