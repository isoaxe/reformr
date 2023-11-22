import { doc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { getDocId, validateToken } from '@/util/helpers';
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
    const docId = await getDocId(email);

    /* Verify reCAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, token);
    if (!isVerified)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

    screening.bmi = parseFloat(bmi);
    screening.height = parseInt(screening.height);
    screening.weight = parseInt(screening.weight);
    screening.phone = '+' + screening.phone.slice(1); // fix phone formatting
    screening.dateCreated = new Date();
    /* Fine to overwrite data saved to Firestore before account creation. */
    await setDoc(doc(db, 'users', docId), {
      dateAccountCreated: null,
      orderStatus: 'pending', // order status that pharmacist will set
      patientStatus: 'pending', // medical status that doctor will set
      screening,
      trackingNumber: '', // set by pharmacist on per-order basis
    });
  } catch (err) {
    console.error('Error saving screening data: ', err);
    return NextResponse.json({ success: false, error: err });
  }

  return NextResponse.json({ success: true });
}
