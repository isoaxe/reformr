import admin from 'firebase-admin';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { STRIPE_WEBHOOK_SECRET } from '@/util/constants';
import { wasRecent } from '@/util/helpers';
import { stripe } from '@/util/stripe';

/* A webhook to listen for invoice events and update Firestore when heard. */
export async function POST(request) {
  const rawBody = await request.text();
  const signature = headers().get('Stripe-Signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      STRIPE_WEBHOOK_SECRET
    );
    console.log('Webhook signature verified and event created.');
  } catch (err) {
    const failMessage = '⚠️  Webhook signature verification failed.';
    console.log(failMessage, err.message);
    return NextResponse.json({ success: false, error: failMessage });
  }

  /* Handle the event. */
  switch (event.type) {
    /* Run payments through Firestore and update expiryDate when payment made. */
    case 'invoice.paid':
      const invoicePaid = event.data.object;
      let customerId = invoicePaid.customer;
      customerId = 'cus_OxvzdleqcuOYP6'; // TODO: remove this, for testing only.
      const subscription = await stripe.subscriptions.list({
        customer: customerId,
      });
      let subExpires;
      if (subscription) {
        /* Assumes only a single subscription active. */
        const subExpiresAsInt = subscription.data[0].current_period_end;
        subExpires = new Date(subExpiresAsInt * 1000);
      }

      /* Get user from Firestore. */
      const db = admin.firestore();
      const usersPath = db.collection('users');
      const userRef = await usersPath
        .where('payments.stripeUid', '==', customerId)
        .get();
      const userData = userRef.docs[0].data();

      /* Skip if customer was just created since init is handled separately. */
      const customer = await stripe.customers.retrieve(customerId);
      if (wasRecent(customer.created)) {
        console.log('ℹ️  Customer was created recently.');
        console.log('Payment data captured via client api call instead.');
        break;
      }
  }
  return NextResponse.json({ success: true, status: 200 });
}
