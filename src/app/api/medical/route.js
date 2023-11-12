import admin from 'firebase-admin';
import { NextResponse } from 'next/server';
import { getDocId, validateToken } from '@/util/helpers';
import { chooseManyLabels, manyRangeLabels } from '@/util/data';
import { initialiseAdmin } from '@/util/admin';

/* Save screening data to Firestore if token is valid. */
export async function POST(request) {
  const data = await request.json();
  const { email, token } = data;
  const medicalAsString = data.medical;
  const medical = JSON.parse(medicalAsString); // medical as JSON

  try {
    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Verify reCAPTCHA token against one from Firestore. */
    const isVerified = await validateToken(email, token);
    if (!isVerified)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

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
    if (numFields === 23) {
      await initialiseAdmin();
      const db = admin.firestore();
      const user = db.collection('users').doc(docId);
      await user.set({ medical }, { merge: true });
    } else console.log('Incorrect number of answers to medical.');
  } catch (err) {
    console.error('Error saving screening data: ', err);
    return NextResponse.json({ success: false, error: err });
  }

  return NextResponse.json({ success: true });
}
