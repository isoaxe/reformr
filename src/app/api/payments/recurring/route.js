import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { STRIPE_WEBHOOK_SECRET } from '@/util/constants';
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
      console.log({ customerId });
      customerId = 'cus_OxvzdleqcuOYP6'; // TODO: remove this, for testing only.
      const subscription = await stripe.subscriptions.list({
        customer: customerId,
      });
      let subExpires;
      if (subscription) {
        /* Assumes only a single subscription active. */
        let subExpiresAsInt = subscription.data[0].current_period_end;
        subExpires = new Date(subExpiresAsInt * 1000).toISOString();
      }
  }
  return NextResponse.json({ success: true, status: 200 });
}
