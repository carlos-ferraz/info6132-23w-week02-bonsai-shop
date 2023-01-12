// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDjpa5bCQ70K2pjZMVfpv6tly03UgK_pUM",
  authDomain: "info6132-23w-week2.firebaseapp.com",
  projectId: "info6132-23w-week2",
  storageBucket: "info6132-23w-week2.appspot.com",
  messagingSenderId: "510297226925",
  appId: "1:510297226925:web:a98912ddc4938b527d5024"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };