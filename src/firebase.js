// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6GhkdrbMh6sKcTSv4WYheZqErrlV3o5E",
  authDomain: "hack-b609c.firebaseapp.com",
  databaseURL: "https://hack-b609c-default-rtdb.firebaseio.com",
  projectId: "hack-b609c",
  storageBucket: "hack-b609c.appspot.com",
  messagingSenderId: "961590374257",
  appId: "1:961590374257:web:699b2e8535d1e0e28490d0",
  measurementId: "G-X4MLB1V59X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);