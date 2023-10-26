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
  apiKey: "AIzaSyAlLNIa9mFpVoGVCrf2rJ5WCQMdJ61IX0I",
  authDomain: "e-commerce-ef083.firebaseapp.com",
  projectId: "e-commerce-ef083",
  storageBucket: "e-commerce-ef083.appspot.com",
  messagingSenderId: "653235498319",
  appId: "1:653235498319:web:57db1d22591e120912293a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;