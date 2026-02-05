// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  onAuthStateChanged
  } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwZw82p7FY80OMoH9sgM-w_Ozf1jJ_JSk",
  authDomain: "yap-sessions-8baab.firebaseapp.com",
  projectId: "yap-sessions-8baab",
  storageBucket: "yap-sessions-8baab.firebasestorage.app",
  messagingSenderId: "1066201568089",
  appId: "1:1066201568089:web:d06ff035a2c823df44b248",
  measurementId: "G-HM522YT4PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in:', user.uid);
    // Update UI/show authenticated content
  } else {
    console.log('User is signed out');
    // Redirect to login page
  }
});

export { app, auth };