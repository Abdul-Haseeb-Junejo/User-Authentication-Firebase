
import {auth, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "./firebase.js";

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

const SignIn = () => {
    console.log("SigninEmail", loginEmail.value);
    console.log("SigninPass", loginPassword.value);

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("SignIn-user:", user);
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
        console.log("user-->", user);
        console.log("UID-->", uid);
    } else {
        console.log("User is signed out");
    }
});

const seePasswordIcon = () => {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        eyeIcon.style.display = "none";
        eyeSlashIcon.style.display = "block";
    } else {
        loginPassword.type = "password";
        eyeIcon.style.display = "block";
        eyeSlashIcon.style.display = "none";
    }
}

const eyeIcon = document.getElementById('eyeIcon');
const eyeSlashIcon = document.getElementById('eyeSlashIcon');
eyeIcon.addEventListener("click", seePasswordIcon);
eyeSlashIcon.addEventListener("click", seePasswordIcon);

const resetPassword = () => {
    const user = loginEmail.value;
    if (!user) {
        alert("Please Enter your Email First");
        return;
    }
    
    sendPasswordResetEmail(auth, user)
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
resetBtn.addEventListener("click", resetPassword);