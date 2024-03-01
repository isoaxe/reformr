import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import { cancelSubscription } from '@/util/stripe';
import { initialiseAdmin } from '@/util/admin';

/* Cancel Stripe subscription and set Firestore flag. */
export async function POST(request) {
  const data = await request.json();
  const { subId, fireToken } = data;

  try {
    /* Validate Firebase token. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    if (!user) return NextResponse.json({ error: 'Invalid token.' });

    /* Cancel subscription with Stripe at end of billing period. */
    await cancelSubscription(subId);

    /* Set subscription to cancelled in Firestore. */
    const db = admin.firestore();
    const { docId } = user;
    const patientRef = db.collection('patients').doc(docId);
    await patientRef.set(
      {
        paymentInfo: {
          metabolicReset: { subscription: { isCancelled: true } },
        },
      },
      { merge: true }
    );

    return NextResponse.json({ error: false });
  } catch (err) {
    console.error('Error cancelling subscription: ', err);
    return NextResponse.json({ error: err });
  }
}
