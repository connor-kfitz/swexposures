import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const developEnvironment = process.env.NODE_ENV === "development";

const firebaseConfig = {
    apiKey: developEnvironment ? process.env.developFirebaseApiKey : process.env.productionFirebaseAPIKey,
    authDomain: developEnvironment ? process.env.developFirebaseAuthDomain : process.env.productionFirebaseAuthDomain,
    projectId: developEnvironment ? process.env.developFirebaseProjectId : process.env.productionFirebaseProjectId,
    storageBucket: developEnvironment ? process.env.developFirebaseStorageBucket : process.env.productionFirebaseStorageBucket,
    messagingSenderId: developEnvironment ? process.env.developFirebaseMessagingSenderId : process.env.productionFirebaseMessagingSenderId,
    appId: developEnvironment ? process.env.developFirebaseAppId : process.env.productionFirebaseAppId,
    measurementId: developEnvironment ? process.env.developFirebaseMeasurementIdb : process.env.productionFirebaseMeasurementId
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);