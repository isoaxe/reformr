import admin from 'firebase-admin';
import { NextResponse } from 'next/server';
import { generateToken } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';

/* Save doctors note to patient record in Firestore. */
export async function POST(request) {
  const data = await request.json();
  const { noteText, docId, doctor } = data;
  const noteId = generateToken(20);

  try {
    await initialiseAdmin();
    const db = admin.firestore();
    const userRef = db.collection('users').doc(docId);
    const userDoc = await userRef.get();
    const notes = userDoc.data().notes ?? [];
    const note = { noteText, dateCreated: new Date(), doctor, noteId };
    notes.push(note);
    await userRef.set({ notes }, { merge: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving note: ', error);
    return NextResponse.json({ success: false, error });
  }
}
