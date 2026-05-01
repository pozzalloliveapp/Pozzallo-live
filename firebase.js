import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqVl3-5vB0_-K6X8mL9nOpQrStZ5zF_Jg",
  authDomain: "pozzallolive-app.firebaseapp.com",
  projectId: "pozzallolive-app",
  storageBucket: "pozzallolive-app.appspot.com",
  messagingSenderId: "825971923234",
  appId: "1:825971923234:web:1a5f6c6a3f7e9c2d1f3a5b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };