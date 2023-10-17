
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDB_At4XFTnEzQ2amhpiDuj95EAcw0yko",
  authDomain: "technology-client.firebaseapp.com",
  projectId: "technology-client",
  storageBucket: "technology-client.appspot.com",
  messagingSenderId: "380934760476",
  appId: "1:380934760476:web:73a428ab93f6d3f4dad7d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;