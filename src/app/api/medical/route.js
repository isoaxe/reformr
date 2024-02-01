import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import { chooseManyLabels, manyRangeLabels } from '@/util/data';
import { initialiseAdmin } from '@/util/admin';

/* Save medical data to Firestore if token is valid. */
export async function POST(request) {
  const data = await request.json();
  const { fireToken } = data;
  const medicalAsString = data.medical;
  const medical = JSON.parse(medicalAsString); // medical as JSON

  try {
    /* Validate Firebase token. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    if (!user) return NextResponse.json({ error: 'Invalid token.' });

    const { docId } = user;
    if (!docId) return NextResponse.json({ error: 'Invalid docId.' });

    /* Parse answers based on ChooseMany structure to attach meaningful results. */
    const checkboxQuestions = Object.keys(chooseManyLabels);
    for (const question of checkboxQuestions) {
      const labels = chooseManyLabels[question];
      const allAnswers = Object.values(medical[question]); // array of booleans
      const curatedAnswer = []; // labels that are true only (i.e. checked)
      for (let i = 0; i < allAnswers.length; i++) {
        if (allAnswers[i]) curatedAnswer.push(labels[i]);
      }
      medical[question] = curatedAnswer;
    }

    /* Parse answer with multiple range sliders to attach meaningful results. */
    const multiRangeQuestions = Object.keys(manyRangeLabels);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (const question of multiRangeQuestions) {
      /* Only one question currently - wm03. */
      const labels = manyRangeLabels[question];
      const rawAnswer = medical[question]; // maps letter to numbers
      const formattedAnswer = {}; // maps formatted labels to numbers
      for (let i = 0; i < labels.length; i++) {
        /* Replace label spaces with underscores to make suitable for use as JSON key. */
        const answerAsKey = labels[i].replace(/ /g, '_');
        formattedAnswer[answerAsKey] = rawAnswer[letters[i]];
      }
      medical[question] = formattedAnswer;
    }

    medical.dateCreated = new Date();
    /* Check that there's the correct number of fields in the submission. */
    const numFields = Object.keys(medical).length;
    const error = `Expected 23 fields, got ${numFields}.`;
    if (numFields !== 23) return NextResponse.json({ error });

    /* If correct number of fields, save to Firestore. */
    const db = admin.firestore();
    const patientRef = db.collection('patients').doc(docId);
    await patientRef.set({ medical }, { merge: true });
    return NextResponse.json({ error: false });
  } catch (err) {
    console.error('Error saving screening data: ', err);
    return NextResponse.json({ error: err });
  }
}

/* Get screening and medical data for the patient. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const docId = searchParams.get('docId');
  const fireToken = searchParams.get('token');

  try {
    /* Verify that user is a doctor. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    const { role } = user;
    if (role !== 'doctor') return NextResponse.json({ error: 'Invalid role.' });

    /* Return patient screening and medical data to the doctor. */
    const db = admin.firestore();
    const patientDoc = await db.collection('patients').doc(docId).get();
    const patientData = patientDoc.data();
    const { screening, medical, notes } = patientData;
    return NextResponse.json({ screening, medical, notes });
  } catch (err) {
    console.error('Error getting patient data: ', err);
    return NextResponse.json({ error: err });
  }
}
