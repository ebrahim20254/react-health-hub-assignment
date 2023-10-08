// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9iIFFhNHjttWLd99LhrkbhLp4WW5iQI",
  authDomain: "react-health-hub-assignment.firebaseapp.com",
  projectId: "react-health-hub-assignment",
  storageBucket: "react-health-hub-assignment.appspot.com",
  messagingSenderId: "297673868266",
  appId: "1:297673868266:web:ca2247e7007241dc27a893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;