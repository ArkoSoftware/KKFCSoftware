// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQX3-Ab9u-Fy7rxjEO_VxREwfcNb-pJKY",
  authDomain: "kkfc-9d819.firebaseapp.com",
  databaseURL: "https://kkfc-9d819-default-rtdb.firebaseio.com",
  projectId: "kkfc-9d819",
  storageBucket: "kkfc-9d819.appspot.com",
  messagingSenderId: "266238206949",
  appId: "1:266238206949:web:8044de4f3429e508c3050c",
  measurementId: "G-D4QH4L9P3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
