// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhY1k4sDjdhM5HHeVc82CdhmwVtf-DLm0",
  authDomain: "docs-clone-e6069.firebaseapp.com",
  projectId: "docs-clone-e6069",
  storageBucket: "docs-clone-e6069.appspot.com",
  messagingSenderId: "56989649493",
  appId: "1:56989649493:web:13297a422b0051ca50e2dc",
  measurementId: "G-DDBDM1ZQZ6"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)