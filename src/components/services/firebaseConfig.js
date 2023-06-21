import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSAxvxrSEITkgUuN0ci05d_VO4K0KBUyY",
  authDomain: "seguializ-commerce.firebaseapp.com",
  projectId: "seguializ-commerce",
  storageBucket: "seguializ-commerce.appspot.com",
  messagingSenderId: "1011693193182",
  appId: "1:1011693193182:web:88295a112ba5d76f9cff4f",
  measurementId: "G-82VFV135XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)