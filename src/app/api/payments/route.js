import { NextResponse } from 'next/server';

/* Sign up a new user and create a monthly subscription payment plan. */
export async function POST(request) {
  const data = await request.json();
  const { paymentInfo } = data;

  return NextResponse.json({ success: true });
}
