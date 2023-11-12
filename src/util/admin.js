/* NOTE: This is for server-side use only. */

import admin from 'firebase-admin';

function formatFirebasePrivateKey(key) {
  return key.replace(/\\n/g, '\n');
}

function createFirebaseAdminApp(params) {
  const privateKey = formatFirebasePrivateKey(params.rawPrivateKey);
  const { projectId, clientEmail } = params;

  /* If already created, return the same instance */
  if (admin.apps.length > 0) return admin.app();

  /* Create certificate */
  const cert = admin.credential.cert({ projectId, clientEmail, privateKey });

  /* Initialize Admin app */
  return admin.initializeApp({ credential: cert, projectId });
}

export async function initialiseAdmin() {
  const params = {
    projectId: 'reformr-health',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    rawPrivateKey: process.env.FIREBASE_PRIVATE_KEY,
  };

  return createFirebaseAdminApp(params);
}
