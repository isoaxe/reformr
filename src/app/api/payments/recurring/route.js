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
    return NextResponse.json({ success: true });
  } catch (err) {
    const failMessage = '⚠️  Webhook signature verification failed.';
    console.log(failMessage, err.message);
    return NextResponse.json({ success: false, error: failMessage });
  }
}
