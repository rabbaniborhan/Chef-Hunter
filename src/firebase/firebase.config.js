// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1L2IN0O0dUB_DTsvGVGtu5SIeZMcqJJk",
  authDomain: "chef-hunter-a4419.firebaseapp.com",
  projectId: "chef-hunter-a4419",
  storageBucket: "chef-hunter-a4419.appspot.com",
  messagingSenderId: "554998421713",
  appId: "1:554998421713:web:bf775c854930f6a73f8df0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app