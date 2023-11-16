import { NextResponse } from 'next/server';
import { cancelSubscription } from '@util/stripe';

/* Cancel Stripe subscription when billing period ends. */
export async function POST(request) {
  const data = await request.json();
  const { subId } = data;

  try {
    await cancelSubscription(subId);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error cancelling subscription: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
