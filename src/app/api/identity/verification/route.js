import Stripe from 'stripe';
import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { STRIPE_SECRET_KEY } from '@/util/constants';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

/* Create new identity session for authenticated patients. */
export async function POST(request) {
  const data = await request.json();
  const { fireToken } = data;

  try {
    /* Validate Firebase token. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    if (!user) return NextResponse.json({ error: 'Invalid token.' });

    /* Create identity verification session. */
    const { docId } = user;
    const verificationSession =
      await stripe.identity.verificationSessions.create({
        type: 'document',
        metadata: { docId },
      });
    const clientSecret = verificationSession.client_secret;

    return NextResponse.json({ clientSecret });
  } catch (err) {
    console.error('Error processing identity verification: ', err);
    return NextResponse.json({ err });
  }
}
