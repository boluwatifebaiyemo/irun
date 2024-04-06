// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlsrrTU6vwIfPjrSXioC86Iq7EKCpihxA",
  authDomain: "irun-77aab.firebaseapp.com",
  projectId: "irun-77aab",
  storageBucket: "irun-77aab.appspot.com",
  messagingSenderId: "567104072370",
  appId: "1:567104072370:web:204e6d72675bdebd33b7ab"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyA7eN9aaNrKHqdWDnRINxkrWwzwPBT8qAo",
//   authDomain: "irun-e8e66.firebaseapp.com",
//   projectId: "irun-e8e66",
//   storageBucket: "irun-e8e66.appspot.com",
//   messagingSenderId: "1082711191007",
//   appId: "1:1082711191007:web:c003d2817b2f80d255286a"
// };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestoreDB = getFirestore(app);
const storage = getStorage(app);

export { firestoreDB,storage }