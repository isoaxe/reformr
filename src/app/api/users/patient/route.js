import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { getDocId, validateToken, makeCamelCase } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';
import { auth, db } from '@/util/firebase';

/* Create new patient user. Update creation date and uid on Firestore. */
export async function POST(request) {
  const data = await request.json();
  const { name, email, password, captchaToken } = data;

  try {
    /* Verify reCAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, captchaToken);
    if (!isVerified) return NextResponse.json({ error: 'Invalid token.' });

    /* Create a new patient user. */
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    updateProfile(auth.currentUser, { displayName: name });

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Update account creation date, uid and status on Firestore. */
    updateDoc(doc(db, 'patients', docId), {
      dateAccountCreated: new Date(),
      userId: user.uid,
      notes: [],
    });
    updateDoc(doc(db, 'emails', email), { isAccountCreated: true });

    /* Save docId to auth for ease of access. */
    await initialiseAdmin();
    getAuth().setCustomUserClaims(user.uid, { docId });
  } catch (err) {
    console.error('Error creating new user: ', err);
  }

  return NextResponse.json({ error: false });
}

/* Change patient status or order status or order tracking number. */
export async function PUT(request) {
  const data = await request.json();
  const { email, patientStatus, orderStatus, trackingNumber, fireToken } = data;

  try {
    /* Verify that user had appropriate role. */
    const user = await getAuth().verifyIdToken(fireToken);
    const { role } = user;
    const allowed = ['doctor', 'pharmacist'];
    if (!allowed.includes(role))
      return NextResponse.json({ error: 'Invalid role.' });

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Update patient status on Firestore. */
    await initialiseAdmin();
    const db = admin.firestore();
    const patientRef = db.collection('patients').doc(docId);
    /* Only one of these conditionals will run. */
    if (patientStatus) await patientRef.set({ patientStatus }, { merge: true });
    if (orderStatus || trackingNumber) {
      const patientDoc = await patientRef.get();
      const { orders } = patientDoc.data();
      const order = orders.pop();
      if (trackingNumber) order.trackingNumber = trackingNumber;
      if (orderStatus) {
        order.status = orderStatus;
        const statusKey = makeCamelCase(orderStatus);
        order.statusDates[statusKey] = new Date();
      }
      orders.push(order);
      await patientRef.set({ orders }, { merge: true });
    }
    return NextResponse.json({ error: false });
  } catch (err) {
    console.error('Error updating status: ', err);
    return NextResponse.json({ error: err });
  }
}

/* Get all patients from Firestore. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fireToken = searchParams.get('fireToken');

  await initialiseAdmin();
  const user = await getAuth().verifyIdToken(fireToken);
  const { role } = user;
  const allowed = ['admin', 'doctor', 'pharmacist'];
  if (!allowed.includes(role))
    return NextResponse.json({ error: 'Invalid role.' });

  try {
    /* Get a list of all patients from Firestore. */
    const db = admin.firestore();
    const paidPatientsRef = await db
      .collection('patients')
      .where('payments.isPaid', '==', true)
      .get();
    const paidPatients = [];
    paidPatientsRef.forEach((doc) => {
      const { screening, patientStatus, identityStatus, orders, payments } =
        doc.data();
      const { status, trackingNumber } = orders.pop();
      const lastPayment = payments.payments.pop().paymentDate.seconds * 1000;
      const patient = {
        name: `${screening.firstName} ${screening.lastName}`,
        email: screening.email,
        docId: doc.id,
        patientStatus,
        identityStatus,
        orderStatus: status,
        lastPayment,
        trackingNumber,
      };
      paidPatients.push(patient);
    });

    return NextResponse.json({ paidPatients });
  } catch (error) {
    console.error('Error getting patients: ', error);
    return NextResponse.json({ error });
  }
}
