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
    let metabolicReset = patientData.paymentInfo?.metabolicReset;
    let stripeUid = patientData.paymentInfo?.metabolicReset;
    if (metabolicReset) return NextResponse.json({ metabolicReset });

    /* Create a new subscription if not in Firestore. */
    if (!stripeUid) stripeUid = await createCustomer(name, email);
    const subscription = await createSubscription(stripeUid);
    metabolicReset = {
      ...subscription,
      numBoxesSkipped: 0,
      isPaid: false,
      isPaused: false,
      isCancelled: false,
    };

    /* Save Stripe payments data to Firestore if not already there. */
    await patientRef.set(
      { paymentInfo: { stripeUid, metabolicReset }, payments: [] },
      { merge: true }
    );

    return NextResponse.json({ metabolicReset });
  } catch (err) {
    console.error('Error creating subscription: ', err);
    return NextResponse.json({ error: err });
  }
}
