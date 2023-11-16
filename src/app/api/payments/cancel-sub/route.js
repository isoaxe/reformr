import admin from 'firebase-admin';
import { NextResponse } from 'next/server';
import { cancelSubscription } from '@/util/stripe';
import { getDocId } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';

/* Cancel Stripe subscription and set Firestore flag. */
export async function POST(request) {
  const data = await request.json();
  const { subId, email } = data;

  try {
    /* Cancel subscription with Stripe at end of billing period. */
    await cancelSubscription(subId);

    /* Set isActive flag for subscription to false in Firestore. */
    const docId = await getDocId(email);
    await initialiseAdmin();
    const db = admin.firestore();
    const userRef = db.collection('users').doc(docId);
    await userRef.set(
      { payments: { subscription: { isActive: false } } },
      { merge: true }
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error cancelling subscription: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
