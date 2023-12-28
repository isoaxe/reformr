import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getPatientData, checkSameUser } from '@/util/server';
import { STRIPE_SECRET_KEY } from '@/util/constants';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

/* Get payment card details from Stripe and return to caller. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const stripeUid = searchParams.get('stripeUid');
  const email = searchParams.get('email');
  const fireToken = searchParams.get('token');

  try {
    /* Check is data belongs to the user. */
    const { error } = await checkSameUser(fireToken, email);
    if (error) return NextResponse.json({ error });

    /* Get card ID from Firestore. */
    const { patientData } = await getPatientData(stripeUid);
    const { paymentMethodId } = patientData.payments;
    if (!paymentMethodId)
      return NextResponse.json({ error: '⚠️  Payment not yet made.' });

    /* Get card details from Stripe. */
    const { card } = await stripe.customers.retrievePaymentMethod(
      stripeUid,
      paymentMethodId
    );
    const { brand, exp_month, exp_year, last4 } = card;
    const coreCard = { brand, exp_month, exp_year, last4 }; // just the essentials

    return NextResponse.json({ card: coreCard });
  } catch (err) {
    console.error('Error getting card details: ', err);
    return NextResponse.json({ error: err });
  }
}
