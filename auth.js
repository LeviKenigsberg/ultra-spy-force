import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const email = document.querySelector("input[type='email']");
const password = document.querySelector("input[type='password']");
const button = document.querySelector("button");

button.onclick = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    window.location.href = "dashboard.html";
  } catch {
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      alert("AGENT CREATED");
    } catch (err) {
      alert(err.message);
    }
  }
};

