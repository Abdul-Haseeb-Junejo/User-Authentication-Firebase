import { auth, onAuthStateChanged, sendEmailVerification, signOut } from "./firebase.js";

const  verifyemailInput = document.getElementById('verifyemailInput');
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("user-->", user);
        console.log("UID-->", uid);
        verifyemailInput.value = user.email;

    } else {
        console.log("User is signed out");
        // Optionally, redirect to login page if user is not authenticated
        window.location.href = "login.html";
    }
    if(user.emailVerified === true){
        iconSpan.innerHTML = `<i class="fa-solid fa-check"></i>`;
        iconSpan.style.color = "green";
        // iconSpan.style.backgroundColor = "white";
        textSpan.innerText = "Verified";
         
      }
      else{
          iconSpan.innerHTML = `<i class="fa-regular fa-circle-xmark verifiedIcon"></i>`;
          textSpan.innerText = "unVerified"
      }
});

const iconSpan = document.getElementById('iconSpan');
const textSpan = document.getElementById('textSpan');


const sendVerificationEmail = () => {
    const user = auth.currentUser;
    if (user) {
        sendEmailVerification(user)
            .then(() => {
                console.log("Verification email sent to", user.email);
                alert("Verification email sent!");
            })
            .catch((error) => {
                console.error("Error sending verification email:", error);
                alert("Error sending verification email.");
            });
        } else {
            console.log("No authenticated user.");
        }
       
        
};

const logOut = () => {
    signOut(auth)
        .then(() => {
            console.log("Sign-out successful");
            alert("Sign-out successful");
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error during sign-out:", error);
            alert("Error during sign-out.");
        });

};

const signoutBtn = document.getElementById('signoutBtn');
signoutBtn.addEventListener("click", logOut);

const sendEmailBtn = document.getElementById('sendEmailBtn');
sendEmailBtn.addEventListener("click", sendVerificationEmail);

