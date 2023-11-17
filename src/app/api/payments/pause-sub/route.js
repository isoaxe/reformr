import admin from 'firebase-admin';
import { NextResponse } from 'next/server';
import { pauseSubscription } from '@/util/stripe';
import { getDocId } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';

/* Pause Stripe subscription and update Firestore data. */
export async function POST(request) {
  const data = await request.json();
  const { subId, email } = data;

  try {
    /* Pause subscription with Stripe for one month. */
    await pauseSubscription(subId);

    /* Increment numBoxesSkipped and turn off isPaid and isPaused flags in Firestore. */
    const docId = await getDocId(email);
    await initialiseAdmin();
    const db = admin.firestore();
    const userRef = db.collection('users').doc(docId);
    const userDoc = await userRef.get();
    const userData = userDoc.data();
    let { numBoxesSkipped } = userData.payments;
    numBoxesSkipped++;
    await userRef.set(
      { payments: { numBoxesSkipped, isPaid: false, isPaused: true } },
      { merge: true }
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error pausing subscription: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
