// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4fzd03K0XPFTuyxxFWngyW1PCjxvMc38",
  authDomain: "realtor-clone-react-f32c3.firebaseapp.com",
  projectId: "realtor-clone-react-f32c3",
  storageBucket: "realtor-clone-react-f32c3.appspot.com",
  messagingSenderId: "823791606313",
  appId: "1:823791606313:web:7d31cbd3b9777039739a38"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();