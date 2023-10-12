// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBybFqYIedZbGQIw7YNQmk9AWS8yWyky-k',
  authDomain: 'reformr-health.firebaseapp.com',
  projectId: 'reformr-health',
  storageBucket: 'reformr-health.appspot.com',
  messagingSenderId: '231626898356',
  appId: '1:231626898356:web:4a86d11158ed53589350e1',
  measurementId: 'G-RQ8CXY68KS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
