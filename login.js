import {auth, signInWithEmailAndPassword, onAuthStateChanged,sendPasswordResetEmail } from "./firebase.js";

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

const resetPassword = () =>{
const user = auth.currentUser
sendPasswordResetEmail(auth, user.email)
  .then(() => {
    alert("Check your Email for reset Password");
    console.log("Password reset email sent!"); 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error");
  });
}

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener("click" , resetPassword)

// const user = auth.currentUser;
// const newPassword = getASecureRandomPassword();
// updatePassword(user, newPassword).then(() => {
//   // Update successful.
// }).catch((error) => {
//   // An error ocurred
//   // ...
// });