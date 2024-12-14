import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPVKi_TeDObhJBUCN6arVpLniUIeN7Sf0",
  authDomain: "fdpvupune.firebaseapp.com",
  projectId: "fdpvupune",
  storageBucket: "fdpvupune.firebasestorage.app",
  messagingSenderId: "285939992052",
  appId: "1:285939992052:web:1956bb11e2dd2d3fb425a1",
  measurementId: "G-E7KL4LZZK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;