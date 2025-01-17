// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_wAG5YkfpxV3LVxM9fORAhQBdXl2K8b4",
  authDomain: "ak-firebasepr1.firebaseapp.com",
  projectId: "ak-firebasepr1",
  storageBucket: "ak-firebasepr1.firebasestorage.app",
  messagingSenderId: "412951775739",
  appId: "1:412951775739:web:779022fcf1bbef32a3235e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();