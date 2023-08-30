// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuBleXxaqyZ6PqpFicNa5uqi482KHe-1w",
  authDomain: "blogging-app-561d8.firebaseapp.com",
  projectId: "blogging-app-561d8",
  storageBucket: "blogging-app-561d8.appspot.com",
  messagingSenderId: "733510518450",
  appId: "1:733510518450:web:2cfe77adf6c92cdc56ebab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
