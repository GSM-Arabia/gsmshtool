import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA29oQhKkGKx0z-tl6MOijDAowW5gJ_MVs",
  authDomain: "gsmtshtool.firebaseapp.com",
  projectId: "gsmtshtool",
  storageBucket: "gsmtshtool.firebasestorage.app",
  messagingSenderId: "163523816501",
  appId: "1:163523816501:web:49d55d365782b888ce557c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
