import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import dayjs from 'dayjs';
import { pauseSubscription } from '@/util/stripe';
import { initialiseAdmin } from '@/util/admin';

/* Pause Stripe subscription and update Firestore data. */
export async function POST(request) {
  const data = await request.json();
  const { subId, fireToken } = data;

  try {
    /* Validate Firebase token. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    if (!user) return NextResponse.json({ error: 'Invalid token.' });

    /* Pause subscription with Stripe for one month. */
    await pauseSubscription(subId);

    /* Increment numBoxesSkipped and turn off isPaid and isPaused flags in Firestore. */
    const db = admin.firestore();
    const { docId } = user;
    const patientRef = db.collection('patients').doc(docId);
    const patientDoc = await patientRef.get();
    const patientData = patientDoc.data();
    const { paymentInfo } = patientData;
    let { numBoxesSkipped, expiryDate } = paymentInfo.metabolicReset;
    numBoxesSkipped++;

    /* Extend expiry date by one month. */
    const oldExpiry = dayjs(expiryDate.seconds * 1000);
    const newExpiry = oldExpiry.add(1, 'month');
    const newExpiryDate = new Date(newExpiry.unix() * 1000);

    await patientRef.set(
      {
        paymentInfo: {
          metabolicReset: {
            expiryDate: newExpiryDate,
            isPaid: false,
            isPaused: true,
            numBoxesSkipped,
          },
        },
      },
      { merge: true }
    );

    return NextResponse.json({ newExpiryDate });
  } catch (err) {
    console.error('Error pausing subscription: ', err);
    return NextResponse.json({ error: err });
  }
}
