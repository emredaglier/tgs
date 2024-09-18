import * as admin from "firebase-admin";

// Initialize the Firebase Admin SDK
console.log(process.env.FIREBASE_SERVICE_ACCOUNT);
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT as string
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const verifyIdToken = (token: string) => {
  return admin.auth().verifyIdToken(token);
};
