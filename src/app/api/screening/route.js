import { doc, getDoc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { db } from '@/util/firebase';

/* Save screening data to Firestore if token is valid. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const bmi = searchParams.get('bmi');
  const screeningAsString = searchParams.get('screening');
  const screening = JSON.parse(screeningAsString); // screening as JSON

  try {
    /* Get docId from Firestore. */
    const { email } = screening;
    const emailsRef = doc(db, 'emails', email);
    const emailSnap = await getDoc(emailsRef);
    const emailsData = emailSnap.data();
    const { docId } = emailsData; // get docId from Firestore

    screening.bmi = parseFloat(bmi);
    screening.height = parseInt(screening.height);
    screening.weight = parseInt(screening.weight);
    screening.phone = '+' + screening.phone.slice(1); // fix phone formatting
    screening.dateCreated = new Date();
    /* Fine to overwrite data saved to Firestore before account creation. */
    await setDoc(doc(db, 'users', docId), {
      screening: screening,
      dateAccountCreated: null,
    });
  } catch (err) {
    console.error('Error saving screening data: ', err);
  }

  return NextResponse.json({ success: true });
}
