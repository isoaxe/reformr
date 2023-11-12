import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { STRIPE_SECRET_KEY } from '@/util/constants';
import { STRIPE_IDENTITY_WEBHOOK_SECRET } from '@/util/constants';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

/* A webhook to listen for identity verification events and update Firestore when heard. */
export async function POST(request) {
  const rawBody = await request.text();
  const signature = headers().get('Stripe-Signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      STRIPE_IDENTITY_WEBHOOK_SECRET
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

  const verificationResult = event?.data?.object;

  /* Access Firestore as required for all events. */
  await initialiseAdmin();
  const db = admin.firestore();
  const usersPath = db.collection('users');

  switch (event.type) {
    case 'identity.verification_session.processing':
      break;
    case 'identity.verification_session.verified':
      break;
    case 'identity.verification_session.requires_input':
      break;
    case 'identity.verification_session.canceled':
      break;
    default:
      console.log(`⚠️  Unhandled event type ${event.type}`);
      return NextResponse.json({ success: false, status: 204 });
  }
  return NextResponse.json({ success: true, status: 200 });
}
