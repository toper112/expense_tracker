
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFuQEVq9IRtTgA757ss8jzL8vFUpLcFfo",
  authDomain: "fir-tovuejs-97d18.firebaseapp.com",
  projectId: "fir-tovuejs-97d18",
  storageBucket: "fir-tovuejs-97d18.appspot.com",
  messagingSenderId: "1063079068187",
  appId: "1:1063079068187:web:b2495f2c73ddd9f59eeebe",
  measurementId: "G-R8X497HKS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export default db;