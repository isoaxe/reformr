import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NextResponse } from 'next/server';
import { auth } from '@/util/firebase';

/* Save screening data to Firestore if token is valid. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const password = searchParams.get('password');

  let user = null;
  let success = false;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    user = res.user;
    if (user) success = true;
  } catch (err) {
    console.error('Error creating new user: ', err);
  }

  return NextResponse.json({ success });
}
