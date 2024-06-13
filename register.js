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

const seePasswordIcon = () => {
  if (registerPassword.type === "password") {
    registerPassword.type = "text";
      eyeIcon.style.display = "none";
      eyeSlashIcon.style.display = "block";
  } else {
    registerPassword.type = "password";
      eyeIcon.style.display = "block";
      eyeSlashIcon.style.display = "none";
  }
}

const eyeIcon = document.getElementById('eyeIcon');
const eyeSlashIcon = document.getElementById('eyeSlashIcon');
eyeIcon.addEventListener("click", seePasswordIcon);
eyeSlashIcon.addEventListener("click", seePasswordIcon);