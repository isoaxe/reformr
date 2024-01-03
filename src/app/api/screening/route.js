import { doc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { getDocId, validateToken } from '@/util/helpers';
import { db } from '@/util/firebase';

/* Save screening data to Firestore if token is valid. */
export async function POST(request) {
  const data = await request.json();
  const { bmi, captchaToken } = data;
  const screeningAsString = data.screening;
  const screening = JSON.parse(screeningAsString); // screening as JSON

  try {
    /* Get docId from Firestore. */
    const { email } = screening;
    const docId = await getDocId(email);

    /* Verify CAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, captchaToken);
    if (!isVerified) return NextResponse.json({ error: 'Invalid token.' });

    screening.bmi = parseFloat(bmi);
    screening.height = parseInt(screening.height);
    screening.weight = parseInt(screening.weight);
    screening.phone = '+' + screening.phone.slice(1); // fix phone formatting
    screening.dateCreated = new Date();
    /* Fine to overwrite data saved to Firestore before account creation. */
    await setDoc(doc(db, 'patients', docId), {
      dateAccountCreated: null,
      orders: [], // contains tracking number and order status with dates
      patientStatus: 'pending', // medical status that doctor will set
      screening,
    });
  } catch (err) {
    console.error('Error saving screening data: ', err);
    return NextResponse.json({ error: err });
  }

  return NextResponse.json({ error: false });
}
