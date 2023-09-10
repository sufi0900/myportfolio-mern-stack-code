import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import "firebase/database";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTObF5tEG_mNd9hSLiZAiXfdcr3QL-eW4",
  authDomain: "sufianmustafa-978e5.firebaseapp.com",
  databaseURL:
    "https://sufianmustafa-978e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sufianmustafa-978e5",
  storageBucket: "sufianmustafa-978e5.appspot.com",
  messagingSenderId: "650024727844",
  appId: "1:650024727844:web:e8d2713063935e938d6fb1",
  measurementId: "G-BKYW9ZV738",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
// Initialize Firebase
