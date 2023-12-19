import admin from 'firebase-admin';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { getDocId } from '@/util/helpers';
import { checkSameUser } from '@/util/server';
import { STRIPE_SECRET_KEY } from '@/util/constants';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

/* Create new identity session for authenticated patients. */
export async function POST(request) {
  const data = await request.json();
  const { email, fireToken } = data;

  try {
    /* Check if user attempting to modify own data. */
    const { error } = await checkSameUser(fireToken, email);
    if (error) return NextResponse.json({ error });

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

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
