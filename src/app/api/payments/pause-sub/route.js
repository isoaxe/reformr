import { NextResponse } from 'next/server';
import { pauseSubscription } from '@/util/stripe';
import { initialiseAdmin } from '@/util/admin';
import { checkSameUser } from '@/util/server';
import { ONE_MONTH } from '@/util/constants';

/* Pause Stripe subscription and update Firestore data. */
export async function POST(request) {
  const data = await request.json();
  const { subId, email, fireToken } = data;

  try {
    /* Check is data belongs to the user. */
    await initialiseAdmin();
    const { error, patientRef } = await checkSameUser(fireToken, email);
    if (error) return NextResponse.json({ error });

    /* Pause subscription with Stripe for one month. */
    await pauseSubscription(subId);

    /* Increment numBoxesSkipped and turn off isPaid and isPaused flags in Firestore. */
    const patientDoc = await patientRef.get();
    const patientData = patientDoc.data();
    let { numBoxesSkipped, expiryDate } = patientData.payments;
    numBoxesSkipped++;
    const newExpiryDate = new Date(expiryDate.seconds * 1000 + ONE_MONTH);
    await patientRef.set(
      {
        payments: {
          expiryDate: newExpiryDate,
          isPaid: false,
          numBoxesSkipped,
          subscription: { isPaused: true },
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
