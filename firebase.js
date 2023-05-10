// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEqeU36oU_ssknmlAOiZPor5fGkgVd-j0",
  authDomain: "foodforall-43c07.firebaseapp.com",
  projectId: "foodforall-43c07",
  storageBucket: "foodforall-43c07.appspot.com",
  messagingSenderId: "910448292732",
  appId: "1:910448292732:web:ebdb4ae87a5a0bd69b6af9",
  measurementId: "G-ZX5CLZR0QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);