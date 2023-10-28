import { doc, getDoc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { db } from '@/util/firebase';

/* Save screening data to Firestore if token is valid. */
export async function POST(request) {
  const data = await request.json();
  const { bmi, token } = data;
  const screeningAsString = data.screening;
  const screening = JSON.parse(screeningAsString); // screening as JSON

  try {
    /* Get docId from Firestore. */
    const { email } = screening;
    const emailsRef = doc(db, 'emails', email);
    const emailSnap = await getDoc(emailsRef);
    const emailsData = emailSnap.data();
    const { docId } = emailsData; // get docId from Firestore

    /* Get token from Firestore. */
    const captchasRef = doc(db, 'captchas', email);
    const captchaSnap = await getDoc(captchasRef);
    const captchasData = captchaSnap.data();
    const savedToken = captchasData.token;
    if (token !== savedToken || token.length !== 50)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

    screening.bmi = parseFloat(bmi);
    screening.height = parseInt(screening.height);
    screening.weight = parseInt(screening.weight);
    screening.phone = '+' + screening.phone.slice(1); // fix phone formatting
    screening.dateCreated = new Date();
    /* Fine to overwrite data saved to Firestore before account creation. */
    await setDoc(doc(db, 'users', docId), {
      screening,
      dateAccountCreated: null,
    });
  } catch (err) {
    console.error('Error saving screening data: ', err);
    return NextResponse.json({ success: false, error: err });
  }

  return NextResponse.json({ success: true });
}
