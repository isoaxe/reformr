import { NextResponse } from 'next/server';
import { cancelSubscription } from '@/util/stripe';
import { checkSameUser } from '@/util/server';

/* Cancel Stripe subscription and set Firestore flag. */
export async function POST(request) {
  const data = await request.json();
  const { subId, email, fireToken } = data;

  try {
    /* Check if user attempting to modify own data. */
    const { error, patientRef } = await checkSameUser(fireToken, email);
    if (error) return NextResponse.json({ error });

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
