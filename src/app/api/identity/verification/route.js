import admin from 'firebase-admin';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { getDocId } from '@/util/helpers';
import { STRIPE_SECRET_KEY } from '@/util/constants';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

/* Create new identity session for authenticated users. */
export async function POST(request) {
  const data = await request.json();
  // TODO: Authenticate with token rather than userId.
  const { email, userId } = data;

  try {
    /* Get userId from Firestore. */
    const docId = await getDocId(email);
    await initialiseAdmin();
    const db = admin.firestore();
    const patientDoc = await db.collection('patients').doc(docId).get();
    const patientData = patientDoc.data();
    const firestoreUserId = patientData.userId;

    /* Check that userId from client is same as Firestore. */
    if (userId && userId !== firestoreUserId)
      return NextResponse.json({ success: false, error: 'User auth failed.' });

    /* Create identity verification session. */
    const verificationSession =
      await stripe.identity.verificationSessions.create({
        type: 'document',
        metadata: { firestoreDocId: docId },
      });
    const clientSecret = verificationSession.client_secret;

    return NextResponse.json({ success: true, clientSecret });
  } catch (err) {
    console.error('Error processing identity verification: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
