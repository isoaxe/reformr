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
  const userData = userRef.docs[0].data();
  const { email } = userData.screening;
  const docId = await getDocId(email);
  const allPaymentData = userData.payments;
  const { payments } = allPaymentData;
  return { docId, payments };
}
