import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { getDocId } from '@/util/helpers';
import { auth } from '@/util/firebase';
import { db } from '@/util/firebase';

/* Save screening data to Firestore if token is valid. */
export async function POST(request) {
  const data = await request.json();
  const { email, password, token } = data;

  let success = false;
  try {
    /* Verify reCAPTCHA token against one from Firestore. */
    const captchasRef = doc(db, 'captchas', email);
    const captchaSnap = await getDoc(captchasRef);
    const captchasData = captchaSnap.data();
    const savedToken = captchasData?.token;
    if (token !== savedToken || token.length !== 50)
      return NextResponse.json({ success, error: 'Invalid reCAPTCHA token' });

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    if (user) success = true;

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Update account creation date, uid and status on Firestore. */
    await setDoc(
      doc(db, 'users', docId),
      { dateAccountCreated: new Date(), userId: user.uid },
      { merge: true }
    );
    await setDoc(
      doc(db, 'emails', email),
      { isAccountCreated: true },
      { merge: true }
    );
  } catch (err) {
    console.error('Error creating new user: ', err);
  }

  return NextResponse.json({ success });
}
