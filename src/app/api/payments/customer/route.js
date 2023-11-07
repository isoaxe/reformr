import { NextResponse } from 'next/server';
import { createCustomer, createSubscription } from '@/util/stripe';
import { getDocId } from '@/util/helpers';

/* Sign up a new user and create a monthly subscription payment plan. */
export async function POST(request) {
  const data = await request.json();
  const { email, token } = data;

  try {
    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Verify reCAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, token);
    if (!isVerified)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

    const userId = await createCustomer(email);
    const subscription = await createSubscription(userId);
    return NextResponse.json(subscription);
  } catch (err) {
    console.error('Error creating subscription: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
