import admin from 'firebase-admin';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { STRIPE_WEBHOOK_SECRET } from '@/util/constants';
import { getDocId, wasRecent } from '@/util/helpers';
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
    console.log('ℹ️  Webhook signature verified and event created.');
  } catch (err) {
    const failMessage = '⚠️  Webhook signature verification failed.';
    console.log(failMessage, err.message);
    return NextResponse.json({ success: false, error: failMessage });
  }

  /* Handle the event. Add payment data to Firestore if payment is made. */
  if (event.type === 'invoice.paid') {
    const invoicePaid = event.data.object;
    let customerId = invoicePaid.customer;
    customerId = 'cus_OxvzdleqcuOYP6'; // TODO: remove this, for testing only.
    const subscription = await stripe.subscriptions.list({
      customer: customerId,
    });
    let paymentDate, expiryDate;
    if (subscription) {
      /* Assumes only a single subscription active. */
      const { current_period_start, current_period_end } = subscription.data[0];
      paymentDate = new Date(current_period_start * 1000);
      expiryDate = new Date(current_period_end * 1000);
    }

    /* Save payments data to Firestore if invoice paid. */
    if (invoicePaid.paid) {
      /* Get user data from Firestore. */
      const db = admin.firestore();
      const usersPath = db.collection('users');
      const userRef = await usersPath
        .where('payments.stripeUid', '==', customerId)
        .get();
      const userData = userRef.docs[0].data();
      const { email } = userData.screening;
      const userId = await getDocId(email);
      const allPaymentData = userData.payments;
      const { payments } = allPaymentData;

      /* Save payments data to Firestore. */
      const payment = {
        product: 'metabolic reset',
        paymentDate,
        paymentAmount: invoicePaid.amount_paid / 100, // amount in NZD
      };
      payments.push(payment);
      const paymentData = { isPaid: true, expiryDate, payments };
      await usersPath
        .doc(userId)
        .set({ payments: paymentData }, { merge: true });
      console.log('✅ Payment made and data saved to Firestore.');
    } else {
      console.log('⚠️  Payment was not made.');
    }

    /* Skip if customer was just created since init is handled separately. */
    const customer = await stripe.customers.retrieve(customerId);
    if (wasRecent(customer.created)) {
      console.log('ℹ️  Customer was created recently.');
      console.log('Payment data captured via client api call instead.');
      return NextResponse.json({ success: true, status: 200 });
    }
  }
  return NextResponse.json({ success: true, status: 200 });
}
