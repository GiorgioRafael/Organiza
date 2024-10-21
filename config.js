// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD138cldREE4mRUvF90THo9_l_2dzrWPG0",
  authDomain: "organiza-2f55d.firebaseapp.com",
  projectId: "organiza-2f55d",
  storageBucket: "organiza-2f55d.appspot.com",
  messagingSenderId: "89185798956",
  appId: "1:89185798956:web:4b849d94226d3018f5fa89",
  measurementId: "G-NBGMHXLNLJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app)
export const FIREBASE_DB = getFirestore(app)

const analytics = getAnalytics(app);
