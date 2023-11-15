import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getPaymentsData } from '@/util/server';
import { STRIPE_SECRET_KEY } from '@/util/constants';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

/* Get payment card details from Stripe and return to caller. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const stripeUid = searchParams.get('stripeUid');
  // TODO: Add token from firebase auth to request.

  try {
    /* Get card ID from Firestore. */
    const { allPaymentData } = await getPaymentsData(stripeUid);
    const { paymentMethodId } = allPaymentData;

    /* Get card details from Stripe. */
    const { card } = await stripe.customers.retrievePaymentMethod(
      stripeUid,
      paymentMethodId
    );

    return NextResponse.json({ success: true, card });
  } catch (err) {
    console.error('Error getting card details: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
