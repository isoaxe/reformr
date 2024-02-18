import admin from 'firebase-admin';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { startEmulators } from '@/util/firebase';
import { STRIPE_SECRET_KEY, FIRESTORE_DOC_ID } from '@/util/constants';
import { STRIPE_IDENTITY_WEBHOOK_SECRET, isLocal } from '@/util/constants';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

/* A webhook to listen for identity verification events and update Firestore when heard. */
export async function POST(request) {
  const rawBody = await request.text();
  const signature = headers().get('Stripe-Signature');

  let event, message;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      STRIPE_IDENTITY_WEBHOOK_SECRET
    );
    console.log('ℹ️  Webhook signature verified and event created.');
  } catch (err) {
    const message = '⚠️  Webhook signature verification failed.';
    console.log(message, err.message);
    return NextResponse.json({ message }, { status: 400 });
  }

  if (isLocal) startEmulators();

  try {
    const verificationResult = event?.data?.object;
    const { metadata, status } = verificationResult;
    const docId = metadata?.docId ?? FIRESTORE_DOC_ID;

    /* Remote webhooks shouldn't respond to events when testing locally. */
    const { isOriginLocal } = metadata; // environment of the event source
    message = `⚠️  Webhook received from local source, so disregard.`;
    if (!isLocal && isOriginLocal)
      return NextResponse.json({ message }, { status: 202 });

    /* Access Firestore as required for all events. */
    await initialiseAdmin();
    const db = admin.firestore();
    const patientRef = db.collection('patients').doc(docId);

    switch (event.type) {
      case 'identity.verification_session.processing':
        patientRef.set({ identityStatus: status }, { merge: true });
        break;
      case 'identity.verification_session.verified':
        patientRef.set({ identityStatus: status }, { merge: true });
        break;
      case 'identity.verification_session.requires_input':
        patientRef.set({ identityStatus: status }, { merge: true });
        break;
      case 'identity.verification_session.canceled':
        patientRef.set({ identityStatus: status }, { merge: true });
        break;
      default:
        message = `⚠️  Unhandled event type ${event.type}`;
        return NextResponse.json({ message }, { status: 202 });
    }
    message = `✅ Identity status updated to ${status}.`;
    return NextResponse.json({ message }, { status: 200 });
  } catch (err) {
    console.log('⚠️  Fatal error in webhook. ', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
