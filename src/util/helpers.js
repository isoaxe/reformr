/*
 * Helper functions available for use throughout the project.
 */
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/util/firebase';

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
  return emailsData.docId;
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

/* Makes a GET request to a given endpoint. */
export async function makeGetRequest(url) {
  const fireToken = await auth.currentUser.getIdToken();
  const options = {
    method: 'GET',
    headers: { authorization: `Bearer ${fireToken}` },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

/* Save new data to quiz cookie on client. */
export function setQuizCookie(quiz, state, cookies) {
  if (!state) return; // exit early as no state to add to cookie

  const options = { expires: 30, sameSite: 'strict' }; // expires in one week
  let quizCookieAsString = cookies.get(quiz) ?? '{}'; // cookie is stored as string
  const quizCookie = JSON.parse(quizCookieAsString); // cookie as JSON object
  const key = Object.keys(state)[0]; // get name of state, e.g. 'firstName'
  quizCookie[key] = state[key]; // add state to cookie
  quizCookieAsString = JSON.stringify(quizCookie); // convert back to string
  cookies.set(quiz, quizCookieAsString, options); // cookie must be set as string
}

/* Check what URL is currently being used and return to caller. */
export function getBaseUrl() {
  let baseUrl;
  const currentUrl = window.location.href;
  if (currentUrl.includes('localhost')) baseUrl = 'http://localhost:3000';
  else if (currentUrl.includes('.app')) baseUrl = 'https://reformr.vercel.app';
  else if (currentUrl.includes('.nz')) baseUrl = 'https://reformr.co.nz';
  else if (currentUrl.includes('.au')) baseUrl = 'https://reformr.com.au';
  return baseUrl;
}

/* Make ordinary sentence into camelCase. */
export function makeCamelCase(sentence) {
  const words = sentence.split(' ');
  const firstWord = words.shift().toLowerCase();
  const remainingWords = words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
  const camelCase = firstWord + remainingWords;
  return camelCase;
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
