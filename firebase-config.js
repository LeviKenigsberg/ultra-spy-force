import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiJ6X-Pk99VNiCapOr4u-yQ8BDHmrHXu4",
  authDomain: "spy-site-7c899.firebaseapp.com",
  projectId: "spy-site-7c899",
  storageBucket: "spy-site-7c899.firebasestorage.app",
  messagingSenderId: "837373403840",
  appId: "1:837373403840:web:2b67225bf14f0d809a4325"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };