import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAwQ2VvpRNwrqS1SSYgSfudBc2SN2Izfjk",
    authDomain: "teamproject-d980d.firebaseapp.com",
    projectId: "teamproject-d980d",
    storageBucket: "teamproject-d980d.appspot.com",
    messagingSenderId: "220936784773",
    appId: "1:220936784773:web:d31e6d8546b392d8e192ec"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db }