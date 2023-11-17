/*
 * Helper functions available on the server.
 */
import admin from 'firebase-admin';
import { initialiseAdmin } from '@/util/admin';
import { getDocId } from './helpers';

/* Get payments data from Firestore. */
export async function getPaymentsData(customerId) {
  await initialiseAdmin();
  const db = admin.firestore();
  const usersPath = db.collection('users');
  const userRef = await usersPath
    .where('payments.stripeUid', '==', customerId)
    .get();
  const userDoc = userRef.docs[0];
  /* This will occur if user details in constants.js not updated when using CLI. */
  if (!userDoc) console.log(`⚠️  No user found with customerId ${customerId}`);
  const userData = userDoc.data();
  const { email } = userData.screening;
  const docId = await getDocId(email);
  const allPaymentData = userData.payments;
  return { docId, allPaymentData };
}
