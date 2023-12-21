import { NextResponse } from 'next/server';
import { saveEmailDoc, saveToken } from '@/util/helpers';

/* Check if the reCAPTCHA token is correct and save email data to Firestore. */
export async function POST(request) {
  const data = await request.json();
  const { firstName, lastName, email, recaptchaToken } = data;

  /* Verify reCAPTCHA token with Google. */
  const baseUrl = 'https://www.google.com/recaptcha/api/siteverify';
  const fullUrl = `${baseUrl}?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaToken}`;
  const apiRes = await fetch(fullUrl, { method: 'POST' });
  const json = await apiRes.json();
  const { success } = json;

  /* Save name, email and CAPTCHA token to Firestore. */
  let captchaToken = null; // different to the token sent to Google
  if (success) {
    await saveEmailDoc(email, firstName, lastName);
    captchaToken = await saveToken(email);
  }

  return NextResponse.json({ success, captchaToken });
}
