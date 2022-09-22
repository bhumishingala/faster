import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-qh3s2HnGCRULrqKGz5DSGbcKXjy5KsQ",
  authDomain: "faster-46224.firebaseapp.com",
  projectId: "faster-46224",
  storageBucket: "faster-46224.appspot.com",
  messagingSenderId: "11554822407",
  appId: "1:11554822407:web:ef0d709ed3625846f30da2",
  measurementId: "G-4ESE5RR3MN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);