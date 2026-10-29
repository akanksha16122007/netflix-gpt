// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHPijm-ZACAxVuAPG9GQGiHDS9WnzWjek",
  authDomain: "netflixgpt-a8253.firebaseapp.com",
  projectId: "netflixgpt-a8253",
  storageBucket: "netflixgpt-a8253.firebasestorage.app",
  messagingSenderId: "303440412527",
  appId: "1:303440412527:web:937129185144b7a146729a",
  measurementId: "G-E1CPYDVLD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
