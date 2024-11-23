// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChEkutkfTnQBVNa4BNYKdpRraRFosDp9I",
  authDomain: "netflix-gpt-711.firebaseapp.com",
  projectId: "netflix-gpt-711",
  storageBucket: "netflix-gpt-711.firebasestorage.app",
  messagingSenderId: "643175217239",
  appId: "1:643175217239:web:5b908edfd55c2554204b12",
  measurementId: "G-K3G4Z44Z1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);