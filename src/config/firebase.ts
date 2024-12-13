// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export const auth = getAuth(app);