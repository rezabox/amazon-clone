// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9jAxZLB4PBS9N4uZdR7qj9UCsaI8KTwk",
  authDomain: "project-33575.firebaseapp.com",
  projectId: "project-33575",
  storageBucket: "project-33575.appspot.com",
  messagingSenderId: "120978819165",
  appId: "1:120978819165:web:42c9647919e693880da5b4",
  measurementId: "G-PZWSFSYPPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);