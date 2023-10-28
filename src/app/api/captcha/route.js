import { NextResponse } from 'next/server';
import { saveEmailDoc, saveToken } from '@/util/helpers';

/* Check if the reCAPTCHA token is correct and save email data to Firestore. */
export async function POST(request) {
  const data = await request.json();
  const { firstName, lastName, email, captchaToken } = data;

  const baseUrl = 'https://www.google.com/recaptcha/api/siteverify';
  const fullUrl = `${baseUrl}?secret=${process.env.RECAPTCHA_SECRET}&response=${captchaToken}`;
  const apiRes = await fetch(fullUrl, { method: 'POST' });
  const json = await apiRes.json();
  const { success } = json;

  let token = null;
  if (success) {
    await saveEmailDoc(email, firstName, lastName);
    token = await saveToken(email);
  }

  return NextResponse.json({ success, token });
}
