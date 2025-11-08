import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// PASTE YOUR CONFIG OBJECT FROM THE FIREBASE CONSOLE HERE
const firebaseConfig = {
  apiKey: "AIzaSyDSKwRrUj6XpsVP_mtyKPOyiDIJF1ueRjg",
  authDomain: "smarttechsuite.firebaseapp.com",
  projectId: "smarttechsuite",
  storageBucket: "smarttechsuite.firebasestorage.app",
  messagingSenderId: "1013515478759",
  appId: "1:1013515478759:web:4e5598d33b03f3967e6442",
  measurementId: "G-XDR4MNGC05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
