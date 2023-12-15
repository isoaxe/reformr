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
    /* Verify that user had appropriate role. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    const { role } = user;
    if (role !== 'doctor') return NextResponse.json({ error: 'Invalid role.' });

    /* Save note to patient doc in Firestore. */
    const db = admin.firestore();
    const patientRef = db.collection('patients').doc(docId);
    const patientDoc = await patientRef.get();
    const notes = patientDoc.data().notes ?? [];
    const note = { noteText, dateCreated: new Date(), doctor, noteId };
    notes.push(note);
    await patientRef.set({ notes }, { merge: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving note: ', error);
    return NextResponse.json({ success: false, error });
  }
}
