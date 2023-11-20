import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NextResponse } from 'next/server';
import { auth } from '@/util/firebase';

/* Create new professional user with role. */
export async function POST(request) {
  const data = await request.json();
  const { name, company, role, email, password } = data;

  let success = false;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    if (user) success = true;
  } catch (err) {
    console.error('Error creating new user: ', err);
  }

  return NextResponse.json({ success });
}
