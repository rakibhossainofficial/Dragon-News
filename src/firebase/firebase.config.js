// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDuFrWanVRBXppzecpAfctu456kZxBE_c",
  authDomain: "dragon-news-9ab9a.firebaseapp.com",
  projectId: "dragon-news-9ab9a",
  storageBucket: "dragon-news-9ab9a.firebasestorage.app",
  messagingSenderId: "269920079951",
  appId: "1:269920079951:web:4fd365c7c9356640691a3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

