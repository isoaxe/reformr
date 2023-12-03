import admin from 'firebase-admin';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { getDocId, validateToken, makeCamelCase } from '@/util/helpers';
import { initialiseAdmin } from '@/util/admin';
import { auth, db } from '@/util/firebase';

/* Create new patient user. Update creation date and uid on Firestore. */
export async function POST(request) {
  const data = await request.json();
  const { name, phone, email, password, token } = data;

  let success = false;
  try {
    /* Verify reCAPTCHA token matches one from Firestore. */
    const isVerified = await validateToken(email, token);
    if (!isVerified)
      return NextResponse.json({ success: false, error: 'Invalid token.' });

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    if (user) success = true;
    // TODO: Find why the phoneNumber field below is not getting set.
    updateProfile(auth.currentUser, {
      displayName: name,
      phoneNumber: phone,
    });

    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Update account creation date, uid and status on Firestore. */
    await updateDoc(doc(db, 'users', docId), {
      dateAccountCreated: new Date(),
      userId: user.uid,
    });
    await updateDoc(doc(db, 'emails', email), { isAccountCreated: true });
  } catch (err) {
    console.error('Error creating new user: ', err);
  }

  return NextResponse.json({ success });
}

/* Change patient status or order status or order tracking number. */
export async function PUT(request) {
  const data = await request.json();
  const { email, patientStatus, orderStatus, trackingNumber } = data;

  try {
    /* Get docId from Firestore. */
    const docId = await getDocId(email);

    /* Update patient status on Firestore. */
    await initialiseAdmin();
    const db = admin.firestore();
    const userRef = db.collection('users').doc(docId);
    /* Only one of these conditionals will run. */
    if (patientStatus) await userRef.set({ patientStatus }, { merge: true });
    if (orderStatus || trackingNumber) {
      const user = await userRef.get();
      const { orders } = user.data();
      const order = orders.pop();
      if (trackingNumber) order.trackingNumber = trackingNumber;
      if (orderStatus) {
        order.status = orderStatus;
        const statusKey = makeCamelCase(orderStatus);
        order.statusDates[statusKey] = new Date();
      }
      orders.push(order);
      await userRef.set({ orders }, { merge: true });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error updating status: ', err);
    return NextResponse.json({ success: false, error: err });
  }
}

/* Get all patient user from Firestore. */
export async function GET() {
  // TODO: Add token from firebase auth to request.
  try {
    /* Get a list of all users from Firestore. */
    await initialiseAdmin();
    const db = admin.firestore();
    const usersPath = db.collection('users');
    const allUserSnapshot = await usersPath
      .where('payments.isPaid', '==', true)
      .get();
    const allUsers = [];
    allUserSnapshot.forEach((doc) => {
      const { screening, patientStatus, orders, payments } = doc.data();
      const { status, trackingNumber } = orders.pop();
      const lastPayment = payments.payments.pop().paymentDate.seconds * 1000;
      const user = {
        name: `${screening.firstName} ${screening.lastName}`,
        email: screening.email,
        patientStatus,
        orderStatus: status,
        lastPayment,
        trackingNumber,
      };
      allUsers.push(user);
    });

    return NextResponse.json({ success: true, allUsers });
  } catch (error) {
    console.error('Error getting users: ', error);
    return NextResponse.json({ success: false, error });
  }
}
