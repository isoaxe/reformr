/*
 * Helper functions available for use throughout the project.
 */
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/util/firebase';

/* Generate a token of a given length. */
export function generateToken(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }
  return token;
}

/* Save email document to Firestore if not already there. */
export async function saveEmailDoc(email, firstName, lastName) {
  const emailsRef = doc(db, 'emails', email);
  const emailSnap = await getDoc(emailsRef);
  if (!emailSnap.exists()) {
    const token = generateToken(50);
    let docId = createDocId(lastName);
    const emailsData = {
      email,
      isAccountCreated: false,
      docId,
      firstName,
      lastName,
      token,
    };
    await setDoc(emailsRef, emailsData);
    return token;
  }
}

/* Save reCAPTCHA token generated in saveEmailDoc to Firestore. */
export async function saveToken(email, token) {
  const captchaRef = doc(db, 'captchas', email);
  await setDoc(captchaRef, { token });
}

/*
 * Helpers for the helper functions. Only used within helpers.js and not exported.
 */

/* Creates a unique document ID for Firestore. Number always 6 digits long. */
function createDocId(name) {
  const idNumber = Math.floor(Math.random() * 1000000);
  let idString = idNumber.toString(); // possibly < 6 digits
  const leadingZeros = 6 - idString.length;
  const leadingZerosAsString = '0'.repeat(leadingZeros);
  idString = leadingZerosAsString + idString; // always 6 digits
  return `${name}-${idString}`;
}
