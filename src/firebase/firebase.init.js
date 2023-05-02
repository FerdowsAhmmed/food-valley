// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMOgT7GZLOAzsx-a5mR1AinoVs1qTMJMU",
  authDomain: "food-valley-cd513.firebaseapp.com",
  projectId: "food-valley-cd513",
  storageBucket: "food-valley-cd513.appspot.com",
  messagingSenderId: "271087127525",
  appId: "1:271087127525:web:1eef07429c41049dd8bd0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;