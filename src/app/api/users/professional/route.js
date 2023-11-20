import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { NextResponse } from 'next/server';
import { auth } from '@/util/firebase';

/* Create new professional user with role. Only accessible by admin. */
export async function POST(request) {
  const data = await request.json();
  const { name, role, email, password } = data;

  let success = false;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    if (user) success = true;
    updateProfile(auth.currentUser, { displayName: name });
  } catch (err) {
    console.error('Error creating new user: ', err);
  }

  return NextResponse.json({ success });
}
