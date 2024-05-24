// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbL3kF2IqtP9GcCRULjEfU2xdNz_763tI",
  authDomain: "journalapp-fb86d.firebaseapp.com",
  projectId: "journalapp-fb86d",
  storageBucket: "journalapp-fb86d.appspot.com",
  messagingSenderId: "1087422263882",
  appId: "1:1087422263882:web:1473a46bc70cc8e0912cb3"
};

// Initialize Firebase
export const FireBaseApp  = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB   = getFirestore(FireBaseApp)