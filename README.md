# 🏆 World Cup 2026 Family Bracket

A fully responsive bracket system for your family to compete through the FIFA World Cup 2026. Built with HTML, CSS, JavaScript, and Firebase Firestore.

---

## 📁 File Structure

```
worldcup-bracket/
├── index.html          ← Landing page (Home)
├── create.html         ← Create a new bracket (info + 72 match picks + goals guess)
├── load.html           ← Load an existing bracket
├── bracket.html        ← Your bracket view (scores, picks)
├── league.html         ← Family league standings
├── admin.html          ← Admin panel (you only — enter match outcomes)
├── css/
│   └── main.css        ← All styles
├── js/
│   └── firebase-config.js  ← ⚠️ YOU MUST FILL THIS IN
└── data/
    └── matches.js      ← All 72 group stage matches
```

---

## 🚀 Setup (5 minutes)

### Step 1 — Create a Firebase Project
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it (e.g. `wc2026-bracket`)
3. Disable Google Analytics (optional) → **Create project**

### Step 2 — Create a Firestore Database
1. In the left sidebar → **Build → Firestore Database**
2. Click **Create database**
3. Choose **Production mode** → Select a location (e.g. `us-central`) → **Enable**

### Step 3 — Set Firestore Security Rules
In Firestore → **Rules** tab, paste:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /brackets/{doc} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if false;
    }
    match /admin/{doc} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```
Click **Publish**.

### Step 4 — Register a Web App
1. In Firebase Console → **Project Settings** (⚙️ gear icon)
2. Scroll down → **Your apps** → Click **</>** (Web)
3. Give it a name → **Register app**
4. Copy the `firebaseConfig` object shown

### Step 5 — Add Your Config
Open `js/firebase-config.js` and fill in your values:
```js
export const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123:web:abc123"
};
```

### Step 6 — Set Your Admin Password
Open `admin.html` and find this line (~line 70):
```js
const ADMIN_PASSWORD = "admin2026";
```
Change `"admin2026"` to your own secret password.

---

## 🌐 Deploy to GitHub Pages

1. Create a GitHub repository (public)
2. Upload all files maintaining the folder structure
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch → `/root` → **Save**
5. Your site will be live at `https://yourusername.github.io/your-repo-name/`

---

## 📖 How to Use

### Family Members
1. Visit the site → **Create Bracket**
2. Enter their name, bracket name, and a password
3. Pick a color for their bracket
4. Go through all 72 group stage matches — pick Home Win, Draw, or Away Win
5. Enter a total goals guess for the group stage
6. Done! They can come back anytime via **Load Bracket**

### You (Admin)
1. Visit `yoursite.com/admin.html`
2. Enter the admin password
3. After each real match is played, click the correct outcome (Home Win / Draw / Away Win)
4. Click **Save All Outcomes**
5. All brackets automatically update their scores!

---

## 🏅 Scoring

- **1 point** per correct group stage match prediction
- League table auto-sorts by total correct picks
- Goals guess is a tiebreaker (closest guess wins ties — you can add this logic later)

---

## 🗓️ Coming Next (Knockout Stage)
The bracket is built to extend — the "Round of 32" and "Knockout" tabs are already in the UI, waiting to be activated when the group stage ends.
