import { getAuth } from 'firebase-admin/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { auth } from '@/util/firebase';

/* Create new professional user with role. Only accessible by admin. */
export async function POST(request) {
  const data = await request.json();
  const { name, role, email, password } = data;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await initialiseAdmin();
    await updateProfile(auth.currentUser, { displayName: name });
    await getAuth().setCustomUserClaims(user.uid, { role });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error creating new user: ', error);
    return NextResponse.json({ success: false, error });
  }
}
