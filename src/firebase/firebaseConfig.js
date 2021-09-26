import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwmQMmRT6ke4JGbw9E-zxN9oClR5yp-9M",
  authDomain: "login2-33276.firebaseapp.com",
  projectId: "login2-33276",
  storageBucket: "login2-33276.appspot.com",
  messagingSenderId: "270101613027",
  appId: "1:270101613027:web:38e1a18b25581cee8df8d6"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();

export{
    app,
    google
}
