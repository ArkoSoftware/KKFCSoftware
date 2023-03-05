// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvlz75XYxP0E6kRl5lmhf3IMFTkoNLCV4",
  authDomain: "inventorymanagement-a4645.firebaseapp.com",
  projectId: "inventorymanagement-a4645",
  storageBucket: "inventorymanagement-a4645.appspot.com",
  messagingSenderId: "170096161001",
  appId: "1:170096161001:web:087314d8f45814489a4078",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
