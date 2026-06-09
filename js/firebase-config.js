// ─── REPLACE WITH YOUR FIREBASE CONFIG ───────────────────────────────────────
// Get this from: Firebase Console → Project Settings → Your Apps → Firebase SDK snippet
//
// Steps:
//   1. Go to https://console.firebase.google.com
//   2. Create a project (or use an existing one)
//   3. Click "Add app" → Web
//   4. Copy the firebaseConfig object values below
//   5. In Firestore, create a database in "production" mode
//   6. Set Firestore rules to allow read/write (see README for rules)

export const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
