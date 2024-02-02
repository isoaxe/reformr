/*
 * Helper functions available on the server.
 */
import admin from 'firebase-admin';
import { headers } from 'next/headers';
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

/* Extract and return the Firebase bearer token from HTTPS request headers. */
export function extractFirebaseToken() {
  const authorization = headers().get('authorization');

  if (!authorization) return { error: 'No authorization field in header.' };

  if (!authorization.startsWith('Bearer'))
    return { error: 'Unauthorized due to token missing the Bearer prefix' };

  const split = authorization.split('Bearer ');
  if (split.length !== 2)
    return { error: 'Unauthorized due to multiple tokens' };

  const fireToken = split[1];
  return { fireToken };
}
