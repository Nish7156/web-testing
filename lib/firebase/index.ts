import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import user from "./user";

const firebaseConfig = {
  apiKey: "AIzaSyDr2N6zCgNOaNndLGhsrOwZLYnjn1F99B4",
  authDomain: "cryptoowl-ai-assistant.firebaseapp.com",
  projectId: "cryptoowl-ai-assistant",
  storageBucket: "cryptoowl-ai-assistant.appspot.com",
  messagingSenderId: "47150912560",
  appId: "1:47150912560:web:801e60bc8edc91cd7809f5",
  measurementId: "G-P48M4W3N0V",
};

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, db, user };
