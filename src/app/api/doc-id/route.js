import { NextResponse } from 'next/server';
import { checkSameUser } from '@/util/server';
import { getDocId } from '@/util/helpers';

/* Return docId if token is valid. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const fireToken = searchParams.get('token');

  try {
    /* Check is data belongs to the user. */
    const { error } = await checkSameUser(fireToken, email);
    if (error) return NextResponse.json({ error });

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    return NextResponse.json({ success: true, docId });
  } catch (err) {
    console.error('Error retrieving document ID: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
