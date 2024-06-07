import {auth, signInWithEmailAndPassword, onAuthStateChanged} from "./firebase.js";

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

const SignIn = ()=>{
  
    console.log("SigninEmail",loginEmail.value);
    console.log("SigninPass",loginPassword.value);


    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("SignIn-user:" ,user);
        alert("Successfully Login");
        window.location.href = "dashboard.html";
       
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      alert("Error");

      });
}

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener("click", SignIn);


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user-->" ,user)
    console.log("UID-->", uid)
  } else {
    console.log( "User is signed out");
    
  }
});

