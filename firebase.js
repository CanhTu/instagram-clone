// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0fe2KguXUZUdcxWp8x_BJYGuY6WaQdQA",
  authDomain: "instagram-clone-ad732.firebaseapp.com",
  projectId: "instagram-clone-ad732",
  storageBucket: "instagram-clone-ad732.appspot.com",
  messagingSenderId: "105611781130",
  appId: "1:105611781130:web:5ba1acead067e15936ebf3",
  measurementId: "G-9EC8W13K0H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export {app, db, storage};