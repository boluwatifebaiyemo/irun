// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestrore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7eN9aaNrKHqdWDnRINxkrWwzwPBT8qAo",
  authDomain: "irun-e8e66.firebaseapp.com",
  projectId: "irun-e8e66",
  storageBucket: "irun-e8e66.appspot.com",
  messagingSenderId: "1082711191007",
  appId: "1:1082711191007:web:c003d2817b2f80d255286a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB =  getFirestore(app);

export {firestoreDB}