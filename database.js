// Import Firebase
import firebase from "firebase/app";
import "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDE-wa5E-MToEWgcJlSb2sl6LI1X8aAzCM",
    authDomain: "verdant-market-392401.firebaseapp.com",
    databaseURL: "https://verdant-market-392401-default-rtdb.firebaseio.com",
    projectId: "verdant-market-392401",
    storageBucket: "verdant-market-392401.appspot.com",
    messagingSenderId: "359504785858",
    appId: "1:359504785858:web:aa9858e4c4a6d7df80a65b",
    measurementId: "G-DCZF9WFTP2"
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
