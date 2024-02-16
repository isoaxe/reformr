import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { isDev } from './constants';

const firebaseConfig = {
  apiKey: 'AIzaSyBybFqYIedZbGQIw7YNQmk9AWS8yWyky-k',
  authDomain: 'reformr-health.firebaseapp.com',
  projectId: 'reformr-health',
  storageBucket: 'reformr-health.appspot.com',
  messagingSenderId: '231626898356',
  appId: '1:231626898356:web:4a86d11158ed53589350e1',
  measurementId: 'G-RQ8CXY68KS',
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

if (isDev) {
  process.env['FIREBASE_AUTH_EMULATOR_HOST'] = '127.0.0.1:9099'; // set env vars
  process.env['FIRESTORE_EMULATOR_HOST'] = '127.0.0.1:8080';
  connectAuthEmulator(auth, 'http://127.0.0.1:9099'); // connect emulators
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

// TODO: Add analytics when required, current implementation was causing issues.
// Search commit 'Suspend analytics from Firebase' for more details.
