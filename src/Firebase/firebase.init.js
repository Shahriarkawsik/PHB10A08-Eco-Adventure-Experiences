import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZApf-H3b_wz8U_0qqAfrY2Bz_BLtlMsE",
  authDomain: "eco-adventure-experience-5c554.firebaseapp.com",
  projectId: "eco-adventure-experience-5c554",
  storageBucket: "eco-adventure-experience-5c554.firebasestorage.app",
  messagingSenderId: "220090527681",
  appId: "1:220090527681:web:ff412dd287625dcead8940",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
