/*
 * Helper functions available on the server.
 */
import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { initialiseAdmin } from '@/util/admin';
import { getDocId } from './helpers';

/* Get patient data from Firestore. */
export async function getPatientData(customerId) {
  await initialiseAdmin();
  const db = admin.firestore();
  const patientRef = await db
    .collection('patients')
    .where('payments.stripeUid', '==', customerId)
    .get(); // returns a single patient
  const patientDoc = patientRef.docs[0];
  /* This will occur if patient details in constants.js not updated when using CLI. */
  if (!patientDoc) console.log(`⚠️  No patient with customerId ${customerId}`);
  const patientData = patientDoc.data();
  const { email } = patientData.screening;
  const docId = await getDocId(email);
  return { docId, patientData };
}

/* Check if user is modifying own data. */
export async function checkSameUser(fireToken, email) {
  /* Get current user ID. */
  await initialiseAdmin();
  const user = await getAuth().verifyIdToken(fireToken);
  const { uid } = user;

  /* Get user ID from Firestore. */
  const docId = await getDocId(email);
  const db = admin.firestore();
  const patientRef = db.collection('patients').doc(docId);
  const patientDoc = await patientRef.get();
  const { userId } = patientDoc.data();

  /* Check that user is modifying their own data. */
  let error;
  if (userId !== uid) error = 'Not authorised to modify this data.';

  return { error, patientRef };
}
