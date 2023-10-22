import { doc, getDoc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { db } from '@/util/firebase';

/* Save screening data to Firestore if token is valid. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const bmi = searchParams.get('bmi');
  const cookieAsString = searchParams.get('cookie');
  const cookieAsJson = JSON.parse(cookieAsString);

  try {
    /* Get docId from Firestore. */
    const { email } = cookieAsJson;
    const emailsRef = doc(db, 'emails', email);
    const emailSnap = await getDoc(emailsRef);
    const emailsData = emailSnap.data();
    const { docId } = emailsData; // get docId from Firestore

    cookieAsJson.bmi = parseFloat(bmi);
    cookieAsJson.height = parseInt(cookieAsJson.height);
    cookieAsJson.weight = parseInt(cookieAsJson.weight);
    cookieAsJson.dateCreated = new Date();
    /* Fine to overwrite data saved to Firestore before account creation. */
    await setDoc(doc(db, 'users', docId), {
      screening: cookieAsJson,
      dateAccountCreated: null,
    });
  } catch (err) {
    console.error('Error saving screening data: ', err);
  }

  return NextResponse.json({ success: true });
}
