import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const register = ()=>{
   
    const registerEmail = document.getElementById('registerEmail');
    const registerPassword = document.getElementById('registerPassword');
   console.log("RegisteredEmail:", registerEmail.value)
   console.log("RegisteredPassword:", registerPassword.value)

    createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
    
    .then((userCredential) => {
      console.log("userCredential",userCredential)
      alert("Successfully Registered");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error message-->", error)
      alert("Error");

    });


}
const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener("click",register);