import admin from 'firebase-admin';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { STRIPE_SECRET_KEY } from '@/util/constants';
import { STRIPE_INVOICE_WEBHOOK_SECRET } from '@/util/constants';
import { STRIPE_UID, isDev } from '@/util/constants';
import { wasRecent } from '@/util/helpers';
import { getPaymentsData } from '@/util/server';

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

  /* Handle the event. Add payment data to Firestore if payment is made. */
  if (event.type === 'invoice.paid') {
    const invoice = event.data.object;
    let customerId = invoice.customer;
    if (isDev) customerId = STRIPE_UID;
    const subscription = await stripe.subscriptions.list({
      customer: customerId,
    });
    let paymentDate, expiryDate;
    if (subscription) {
      /* Assumes only a single subscription active. */
      const { current_period_end } = subscription.data[0];
      const { created } = invoice;
      paymentDate = new Date(created * 1000);
      expiryDate = new Date(current_period_end * 1000);
    }

    /* Save payments data to Firestore if invoice paid. */
    if (invoice.paid) {
      /* Get payments data from Firestore. */
      const { docId, payments } = await getPaymentsData(customerId);

      /* Save payments data to Firestore. */
      const payment = {
        product: 'metabolic reset',
        paymentDate,
        paymentAmount: invoice.amount_paid / 100, // amount in NZD
      };
      payments.push(payment);
      const paymentData = { isPaid: true, expiryDate, payments };
      await usersPath
        .doc(docId)
        .set({ payments: paymentData }, { merge: true });
      console.log('✅ Payment made and data saved to Firestore.');
    } else {
      console.log('❌ Payment was not made.');
    }

    /* Set default payment method for customer if recently created. */
    const customer = await stripe.customers.retrieve(customerId);
    if (wasRecent(customer.created)) {
      console.log('ℹ️  Customer was created recently.');
      const paymentIntentId = invoice.payment_intent;
      const paymentIntent = await stripe.paymentIntents.retrieve(
        paymentIntentId
      );
      const paymentMethod = paymentIntent.payment_method; // card ID in Stripe
      await stripe.customers.update(customerId, {
        invoice_settings: { default_payment_method: paymentMethod },
      });
      console.log(`✅ Payment method ${paymentMethod} set as default`);
    }
    return NextResponse.json({ success: true, status: 200 });
  }

  if (event.type === 'invoice.payment_failed') {
    console.log('ℹ️  Invoice payment failed.');
    const invoice = event.data.object;
    let customerId = invoice.customer;
    if (isDev) customerId = STRIPE_UID;

    /* Get user data from Firestore. */
    const { docId } = await getPaymentsData(customerId);

    /* Set user as unpaid in Firestore. */
    await usersPath
      .doc(docId)
      .set({ payments: { isPaid: false } }, { merge: true });
    console.log('ℹ️  User set as unpaid in Firestore.');
    return NextResponse.json({ success: true, status: 204 });
  }
}
