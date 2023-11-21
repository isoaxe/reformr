import admin from 'firebase-admin';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { getDocId, validateToken } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';
import { auth, db } from '@/util/firebase';

/* Create new patient user. Update creation date and uid on Firestore. */
export async function POST(request) {
  const data = await request.json();
  const { name, phone, email, password, token } = data;

  let success = false;
  try {
    /* Verify reCAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, token);
    if (!isVerified)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    if (user) success = true;
    // TODO: Find why the phoneNumber field below is not getting set.
    updateProfile(auth.currentUser, {
      displayName: name,
      phoneNumber: phone,
    });

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Update account creation date, uid and status on Firestore. */
    await updateDoc(doc(db, 'users', docId), {
      dateAccountCreated: new Date(),
      userId: user.uid,
    });
    await updateDoc(doc(db, 'emails', email), { isAccountCreated: true });
  } catch (err) {
    console.error('Error creating new user: ', err);
  }

  return NextResponse.json({ success });
}

/* Get all patient user from Firestore. */
export async function GET() {
  // TODO: Add token from firebase auth to request.
  try {
    /* Get a list of all users from Firestore. */
    await initialiseAdmin();
    const db = admin.firestore();
    const usersPath = db.collection('users');
    const allUserSnapshot = await usersPath.get();
    const allUsers = [];
    allUserSnapshot.forEach((doc) => {
      const { screening } = doc.data();
      const user = {
        name: `${screening.firstName} ${screening.lastName}`,
        email: screening.email,
      };
      allUsers.push(user);
    });

    return NextResponse.json({ success: true, allUsers });
  } catch (error) {
    console.error('Error getting users: ', error);
    return NextResponse.json({ success: false, error });
  }
}
