import { getAuth } from 'firebase-admin/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';
import { auth } from '@/util/firebase';

/* Creates a new company user with role of doctor, pharmacist or admin. */
export async function POST(request) {
  const data = await request.json();
  const { name, role, email, password, fireToken } = data;

  try {
    /* Verify that user is an admin. */
    await initialiseAdmin();
    const currentUser = await getAuth().verifyIdToken(fireToken);
    const currentUserRole = currentUser.role;
    if (currentUserRole !== 'admin')
      return NextResponse.json({ error: 'Invalid role.' });

    /* Create new company user. */
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = res.user;
    await updateProfile(auth.currentUser, { displayName: name });
    await getAuth().setCustomUserClaims(newUser.uid, { role });
    return NextResponse.json({ error: false });
  } catch (error) {
    console.error('Error creating new user: ', error);
    return NextResponse.json({ error });
  }
}
