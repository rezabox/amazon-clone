// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHnLjs_PaNYS2lyHg4N-t9fq7zJ5qCf0E",
  authDomain: "clone-874a5.firebaseapp.com",
  projectId: "clone-874a5",
  storageBucket: "clone-874a5.appspot.com",
  messagingSenderId: "427061180799",
  appId: "1:427061180799:web:d76ece1fb07fef2072024a",
  measurementId: "G-MS3GJKHB12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;