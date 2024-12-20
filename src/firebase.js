// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyCFNhxgljCabE3VFv8uyBL_FsrA6M5P3rA",
  authDomain: "bima-f5a50.firebaseapp.com",
  projectId: "bima-f5a50",
  storageBucket: "bima-f5a50.appspot.com",
  messagingSenderId: "325594940307",
  appId: "1:325594940307:web:38c9bc5ab7008179021e66"

};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };