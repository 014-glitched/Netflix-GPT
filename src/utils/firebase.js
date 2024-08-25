// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQRoNVfsgWjdLhZdkWFByOpJzRK1Pg6TE",
  authDomain: "netflix-gpt-p01.firebaseapp.com",
  projectId: "netflix-gpt-p01",
  storageBucket: "netflix-gpt-p01.appspot.com",
  messagingSenderId: "37257517322",
  appId: "1:37257517322:web:ab43f455e0f3bf8e0902f3",
  measurementId: "G-BS08Z451BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
