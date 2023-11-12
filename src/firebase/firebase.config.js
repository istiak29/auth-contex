// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgpFI-gEWIbhBjc826GxdZGUPIOxZ1Rt8",
  authDomain: "auth-contex-a1db4.firebaseapp.com",
  projectId: "auth-contex-a1db4",
  storageBucket: "auth-contex-a1db4.appspot.com",
  messagingSenderId: "583269469015",
  appId: "1:583269469015:web:a6189079bb8c2e726d8c12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

