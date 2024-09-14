// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd9yqARCdFZexRhi2zaN4Da-7HTp2SNas",
    authDomain: "learning-32187.firebaseapp.com",
    projectId: "learning-32187",
    storageBucket: "learning-32187.appspot.com",
    messagingSenderId: "585561970379",
    appId: "1:585561970379:web:9af874e2fbf58d29b7ad4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);