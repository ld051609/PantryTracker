import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU9vxvMXIinofVCRJhBuIF0C7Wdy40HG8",
  authDomain: "pantrytracker-bbf88.firebaseapp.com",
  projectId: "pantrytracker-bbf88",
  storageBucket: "pantrytracker-bbf88.appspot.com",
  messagingSenderId: "714872318407",
  appId: "1:714872318407:web:5dc589436a11275957d1e2",
  measurementId: "G-SZJQ93GWJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;