import { NextResponse } from 'next/server';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/util/firebase';

/* Find if the email is associated with an existing user. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  let isAccountCreated = null;
  const users = collection(db, 'users');
  const q = query(users, where('screening.email', '==', email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    /* Required to iterate, not allowed to simply access first element. */
    isAccountCreated = doc.data().isAccountCreated;
  });
  return NextResponse.json({ isAccountCreated });
}
