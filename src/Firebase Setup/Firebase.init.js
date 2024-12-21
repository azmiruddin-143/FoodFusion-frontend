// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnDyxSVtWsmCYDk8RwQhIEezpK0lQGUmw",
  authDomain: "foodfusion-4eca3.firebaseapp.com",
  projectId: "foodfusion-4eca3",
  storageBucket: "foodfusion-4eca3.firebasestorage.app",
  messagingSenderId: "175497693967",
  appId: "1:175497693967:web:56303354c88ba229e40c7a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)