// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOo9Qc3kNCYNaqx50zHRC_wigxSGfnmx4",
    authDomain: "pix-parker.firebaseapp.com",
    projectId: "pix-parker",
    storageBucket: "pix-parker.appspot.com",
    messagingSenderId: "279021459701",
    appId: "1:279021459701:web:0a7e2c52d8695a6b4a4dbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth