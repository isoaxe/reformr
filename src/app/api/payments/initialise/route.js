import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import { createCustomer, createSubscription } from '@/util/stripe';
import { getDocId, validateToken } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';

/* Sign up a new customer and create a subscription. Make the first payment. */
export async function POST(request) {
  const data = await request.json();
  const { fireToken } = data;

  try {
    /* Get name and email from Firebase auth token. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    const { displayName, email } = user;

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Return subscription if already in Firestore. */
    await initialiseAdmin();
    const db = admin.firestore();
    const patientRef = db.collection('patients').doc(docId);
    const patientDoc = await patientRef.get();
    const patientData = patientDoc.data();
    const { payments } = patientData;
    if (payments) {
      const { subscription } = payments;
      return NextResponse.json(subscription);
    }

    /* Create a new subscription if not in Firestore, */
    const stripeUid = await createCustomer(displayName, email);
    const subscription = await createSubscription(stripeUid);
    subscription.isCancelled = false;
    subscription.isPaused = false;

    /* Save Stripe payments data to Firestore if not already there. */
    const paymentData = {
      subscription,
      stripeUid,
      numBoxesSkipped: 0,
      isPaid: false,
      payments: [],
    };
    await patientRef.set({ payments: paymentData }, { merge: true });

    return NextResponse.json(subscription);
  } catch (err) {
    console.error('Error creating subscription: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}
