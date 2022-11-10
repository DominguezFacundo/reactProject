import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC5d0mK2qUJGcGtgkIPMzBEMx7WJXQXp9c",
  authDomain: "peripherals-dominguez.firebaseapp.com",
  projectId: "peripherals-dominguez",
  storageBucket: "peripherals-dominguez.appspot.com",
  messagingSenderId: "73010862465",
  appId: "1:73010862465:web:cb91afde112a426e1ef080"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);