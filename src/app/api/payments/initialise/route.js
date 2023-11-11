import admin from 'firebase-admin';
import { NextResponse } from 'next/server';
import { createCustomer, createSubscription } from '@/util/stripe';
import { getDocId, validateToken } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';

/* Sign up a new customer and create a subscription. Make the first payment. */
export async function POST(request) {
  const data = await request.json();
  const { name, email, token } = data;

  try {
    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Verify reCAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, token);
    if (!isVerified)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

    /* Return subscription if already in Firestore. */
    await initialiseAdmin();
    const db = admin.firestore();
    const userRef = db.collection('users').doc(docId);
    const user = await userRef.get();
    const userData = user.data();
    const { payments } = userData;
    if (payments) {
      const { subscription } = payments;
      return NextResponse.json(subscription);
    }

    /* Create a new subscription if not in Firestore, */
    const stripeUid = await createCustomer(name, email);
    const subscription = await createSubscription(stripeUid);

    /* Save Stripe payments data to Firestore if not already there. */
    const paymentData = {
      subscription,
      stripeUid,
      numBoxesSkipped: 0,
      isPaid: false,
      payments: [],
    };
    await userRef.set({ payments: paymentData }, { merge: true });

    return NextResponse.json(subscription);
  } catch (err) {
    console.error('Error creating subscription: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
