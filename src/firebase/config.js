import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpQmzcd1MzkwGAEyIRMT3bh0a96ezKKYU",
  authDomain: "mini-blog-222c5.firebaseapp.com",
  projectId: "mini-blog-222c5",
  storageBucket: "mini-blog-222c5.firebasestorage.app",
  messagingSenderId: "432814156853",
  appId: "1:432814156853:web:6f34032a7efb57ba17d57c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };