import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import { cancelSubscription } from '@/util/stripe';
import { getDocId } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';

/* Cancel Stripe subscription and set Firestore flag. */
export async function POST(request) {
  const data = await request.json();
  const { subId, email, fireToken } = data;

  try {
    /* Get current user ID. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    const { uid } = user;

    /* Get user ID from Firestore. */
    const docId = await getDocId(email);
    const db = admin.firestore();
    const patientRef = db.collection('patients').doc(docId);
    const patientDoc = await patientRef.get();
    const { userId } = patientDoc.data();

    /* Check that user is modifying their own data. */
    if (userId !== uid) {
      const error = 'Not authorised to modify this data.';
      return NextResponse.json({ error });
    }

    /* Cancel subscription with Stripe at end of billing period. */
    await cancelSubscription(subId);

    /* Set subscription to cancelled in Firestore. */
    await patientRef.set(
      { payments: { subscription: { isCancelled: true } } },
      { merge: true }
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error cancelling subscription: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
