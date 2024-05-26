// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn04jxk24Ryv2GSFYz0_J6R8iDcX7hjA4",
  authDomain: "netflixgpt-99d90.firebaseapp.com",
  projectId: "netflixgpt-99d90",
  storageBucket: "netflixgpt-99d90.appspot.com",
  messagingSenderId: "434219837893",
  appId: "1:434219837893:web:45eb2c26e7e729d87383ac",
  measurementId: "G-88G4SVB5EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();