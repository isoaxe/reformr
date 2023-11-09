import { NextResponse } from 'next/server';
import { getDocId, validateToken } from '@/util/helpers';

/* Return docId if token is valid. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  try {
    /* Verify reCAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, token);
    if (!isVerified)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    return NextResponse.json({ success: true, docId });
  } catch (err) {
    console.error('Error retrieving document ID: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
