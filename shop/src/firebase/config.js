import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcx-ebVsYdzv2l9msRCjwMkw4AjG-0p7Y",
  authDomain: "auth-shop-994d6.firebaseapp.com",
  databaseURL: "https://auth-shop-994d6-default-rtdb.firebaseio.com",
  projectId: "auth-shop-994d6",
  storageBucket: "auth-shop-994d6.appspot.com",
  messagingSenderId: "146655957702",
  appId: "1:146655957702:web:b04a0dddd5b6a1aff33dc7",
};

//init firebase
initializeApp(firebaseConfig);

//initfirebase auth
const auth = getAuth();

export { auth };
