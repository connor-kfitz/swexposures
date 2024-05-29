import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBBIwb-9C3dtXvBJop__fSo8rSiIy4bqi0",
    authDomain: "swexposures-14cb3.firebaseapp.com",
    projectId: "swexposures-14cb3",
    storageBucket: "swexposures-14cb3.appspot.com",
    messagingSenderId: "36352396137",
    appId: "1:36352396137:web:d37ff8dbdde72f37a68bf8",
    measurementId: "G-JPKF85TCY1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);