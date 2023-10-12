import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
