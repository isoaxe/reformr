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

/* Get docId from Firestore. */
export async function getDocId(email) {
  const emailsRef = doc(db, 'emails', email);
  const emailSnap = await getDoc(emailsRef);
  const emailsData = emailSnap.data();
  const { docId } = emailsData;
  return docId;
}

/* Save email document to Firestore if not already there. */
export async function saveEmailDoc(email, firstName, lastName) {
  const emailsRef = doc(db, 'emails', email);
  const emailSnap = await getDoc(emailsRef);
  if (!emailSnap.exists()) {
    let docId = createDocId(lastName);
    const emailsData = {
      email,
      isAccountCreated: false,
      docId,
      firstName,
      lastName,
      dateCreated: new Date(),
    };
    await setDoc(emailsRef, emailsData);
  }
}

/* Save reCAPTCHA token generated in saveEmailDoc to Firestore. */
export async function saveToken(email) {
  const token = generateToken(50);
  const captchaRef = doc(db, 'captchas', email);
  await setDoc(captchaRef, { token });
  return token;
}

/* Verify reCAPTCHA token matches one from Firestore. */
export async function validateToken(email, token) {
  const captchasRef = doc(db, 'captchas', email);
  const captchaSnap = await getDoc(captchasRef);
  const captchasData = captchaSnap.data();
  const savedToken = captchasData?.token;
  if (token !== savedToken || token.length !== 50) return false; // invalid
  else return true; // valid
}

/* Save new data to quiz cookie on client. */
export function setQuizCookie(quiz, state, cookies) {
  if (!state) return; // exit early as no state to add to cookie

  const options = { expires: 7, sameSite: 'strict' }; // expires in one week
  let quizCookieAsString = cookies.get(quiz) ?? '{}'; // cookie is stored as string
  const quizCookie = JSON.parse(quizCookieAsString); // cookie as JSON object
  const key = Object.keys(state)[0]; // get name of state, e.g. 'firstName'
  quizCookie[key] = state[key]; // add state to cookie
  quizCookieAsString = JSON.stringify(quizCookie); // convert back to string
  cookies.set(quiz, quizCookieAsString, options); // cookie must be set as string
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
