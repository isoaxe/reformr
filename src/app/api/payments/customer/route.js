import { NextResponse } from 'next/server';
import { createCustomer, createSubscription } from '@/util/stripe';

/* Sign up a new user and create a monthly subscription payment plan. */
export async function POST(request) {
  const data = await request.json();
  const { email } = data;
  const userId = await createCustomer(email);
  const subscription = await createSubscription(userId);

  return NextResponse.json(subscription);
}
