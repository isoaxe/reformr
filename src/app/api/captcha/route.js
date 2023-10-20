import { NextResponse } from 'next/server';

/* Check if the reCAPTCHA token is correct with Google. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  const baseUrl = 'https://www.google.com/recaptcha/api/siteverify';
  const fullUrl = `${baseUrl}?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`;
  const apiRes = await fetch(fullUrl, { method: 'POST' });
  let verified = false;
  if (apiRes.status === 200) verified = true;
  return NextResponse.json({ success: verified });
}
