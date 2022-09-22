import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxexTF2y1g6rUWUhe8yT-2exbQJbxUR-s",
  authDomain: "faster-admin-5d308.firebaseapp.com",
  projectId: "faster-admin-5d308",
  storageBucket: "faster-admin-5d308.appspot.com",
  messagingSenderId: "447962212390",
  appId: "1:447962212390:web:c66398ba0092217a349ee7",
  measurementId: "G-KYSW7FTMRL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);