import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { auth } from '@/util/firebase';
import { db } from '@/util/firebase';

/* Save screening data to Firestore if token is valid. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const password = searchParams.get('password');
  const token = searchParams.get('token');

  let success = false;
  let error = '';
  try {
    /* Get reCAPTCHA token from Firestore. */
    const captchasRef = doc(db, 'captchas', email);
    const captchaSnap = await getDoc(captchasRef);
    const captchasData = captchaSnap.data();
    const savedToken = captchasData.token;
    if (token !== savedToken || token.length !== 50)
      return NextResponse.json({ success, error: 'Invalid reCAPTCHA token' });

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    if (user) success = true;
  } catch (err) {
    console.error('Error creating new user: ', err);
  }

  return NextResponse.json({ success });
}
