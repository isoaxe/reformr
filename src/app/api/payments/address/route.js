import admin from 'firebase-admin';
import { NextResponse } from 'next/server';
import { getDocId, validateToken } from '@/util/helpers';
import { initializeAdmin } from '@/util/admin';

/* Save address to Firestore if token is valid. */
export async function POST(request) {
  const data = await request.json();
  const { email, token } = data;
  const addressAsString = data.address;
  const address = JSON.parse(addressAsString); // address as JSON

  try {
    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Verify reCAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, token);
    if (!isVerified)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

    /* Save address to Firestore. */
    await initializeAdmin();
    const db = admin.firestore();
    const user = db.collection('users').doc(docId);
    await user.set({ address }, { merge: true });
  } catch (err) {
    console.error('Error saving address: ', err);
    return NextResponse.json({ success: false, error: err });
  }

  return NextResponse.json({ success: true });
}
