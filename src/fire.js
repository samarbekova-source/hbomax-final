import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtk-623I7FF85yyZeXN7aaX-tBj7-Gv2c",
  authDomain: "chats-ae6d3.firebaseapp.com",
  projectId: "chats-ae6d3",
  storageBucket: "chats-ae6d3.appspot.com",
  messagingSenderId: "765762138591",
  appId: "1:765762138591:web:02124f8e1c6442b687546a",
  measurementId: "G-QSPT36JX7T",
};

const fire = firebase.initializeApp(firebaseConfig);

// js17@gmail.com -login admin// password: Password123export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default fire;
