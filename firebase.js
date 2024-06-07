import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification,signOut} from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyA2lLOYzRtyKeDlWbCaA6-JnJmq7dzGtjQ",
    authDomain: "registration-form-b2de4.firebaseapp.com",
    projectId: "registration-form-b2de4",
    storageBucket: "registration-form-b2de4.appspot.com",
    messagingSenderId: "766481283115",
    appId: "1:766481283115:web:50a85c4eaca868e009526e",
    measurementId: "G-Y2QS3R1EVJ"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export{
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut
}