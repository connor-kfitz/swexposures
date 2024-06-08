import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const developEnvironment = process.env.NODE_ENV === "development";

const firebaseConfig = {
    apiKey: developEnvironment ? process.env.NEXT_PUBLIC_DEVELOP_FB_API_KEY : process.env.NEXT_PUBLIC_PRODUCTION_FB_API_KEY,
    authDomain: developEnvironment ? process.env.NEXT_PUBLIC_DEVELOP_FB_AUTH_DOMAIN : process.env.NEXT_PUBLIC_PRODUCTION_FB_AUTH_DOMAIN,
    projectId: developEnvironment ? process.env.NEXT_PUBLIC_DEVELOP_FB_PROJECT_ID : process.env.NEXT_PUBLIC_PRODUCTION_FB_PROJECT_ID,
    storageBucket: developEnvironment ? process.env.NEXT_PUBLIC_DEVELOP_FB_STORAGE_BUCKET : process.env.NEXT_PUBLIC_PRODUCTION_FB_STORAGE_BUCKET,
    messagingSenderId: developEnvironment ? process.env.NEXT_PUBLIC_DEVELOP_FB_MS_ID : process.env.NEXT_PUBLIC_PRODUCTION_FB_MS_ID,
    appId: developEnvironment ? process.env.NEXT_PUBLIC_DEVELOP_FB_APP_ID : process.env.NEXT_PUBLIC_PRODUCTION_FB_APP_ID,
    measurementId: developEnvironment ? process.env.NEXT_PUBLIC_DEVELOP_FB_MEASUREMENT_ID : process.env.NEXT_PUBLIC_PRODUCTION_FB_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);