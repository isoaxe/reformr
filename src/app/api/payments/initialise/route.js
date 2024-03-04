import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import { createCustomer, createSubscription } from '@/util/stripe';
import { initialiseAdmin } from '@/util/admin';

/* Sign up a new customer and create a subscription. Make the first payment. */
export async function POST(request) {
  const data = await request.json();
  const { fireToken } = data;

  try {
    /* Get name, email and docId from Firebase auth token. */
    await initialiseAdmin();
    const user = await getAuth().verifyIdToken(fireToken);
    const { name, email, docId } = user;

    /* Return subscription if already in Firestore. */
    const db = admin.firestore();
    const patientRef = db.collection('patients').doc(docId);
    const patientDoc = await patientRef.get();
    const patientData = patientDoc.data();
    const { metabolicReset } = patientData.paymentInfo;
    if (metabolicReset) {
      const { subscription } = metabolicReset;
      return NextResponse.json({ subscription });
    }

    /* Create a new subscription if not in Firestore. */
    const stripeUid = await createCustomer(name, email);
    const subscription = await createSubscription(stripeUid);
    subscription.isCancelled = false;
    subscription.isPaused = false;

    /* Save Stripe payments data to Firestore if not already there. */
    const paymentData = { subscription, numBoxesSkipped: 0, isPaid: false };
    await patientRef.set(
      { paymentInfo: { stripeUid, metabolicReset: paymentData }, payments: [] },
      { merge: true }
    );

    return NextResponse.json({ subscription });
  } catch (err) {
    console.error('Error creating subscription: ', err);
    return NextResponse.json({ error: err });
  }
}
