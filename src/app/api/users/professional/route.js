import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import { initialiseAdmin } from '@/util/admin';

/* Creates a new company user with role of doctor, pharmacist or admin. */
export async function POST(request) {
  const data = await request.json();
  const { displayName, role, email, password, fireToken } = data;

  try {
    /* Verify that user is an admin. */
    await initialiseAdmin();
    const currentUser = await getAuth().verifyIdToken(fireToken);
    const currentUserRole = currentUser.role;
    if (currentUserRole !== 'admin')
      return NextResponse.json({ error: 'Invalid role.' });

    /* Create new company user. */
    const user = await getAuth().createUser({ email, password, displayName });
    await getAuth().setCustomUserClaims(user.uid, { role });
    return NextResponse.json({ error: false });
  } catch (error) {
    console.error('Error creating new user: ', error);
    return NextResponse.json({ error });
  }
}
