/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from "firebase/app";

console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.VITE_API_FIREBASE_API_KEY,
  authDomain: process.env.VITE_API_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_API_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_API_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_API_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);