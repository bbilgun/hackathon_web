import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let app = getApps()[0];

if (!getApps().length) {
  app = initializeApp({
    apiKey: "AIzaSyDPxqOhMWpFCbCO8ZxwRauFGvXm2RjtFW0",
    authDomain: "hackathon-ad526.firebaseapp.com",
    projectId: "hackathon-ad526",
    storageBucket: "hackathon-ad526.appspot.com",
    messagingSenderId: "19031728264",
    appId: "1:19031728264:web:48d573d291e42f6bfa7f3d",
  });
}

const db = getFirestore(app);

export { db };
