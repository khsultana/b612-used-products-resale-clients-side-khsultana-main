// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyAAykvbWH_5rwAeySNMwVyp4ZG48c6F9PU",
  authDomain: "car-zone-7b44e.firebaseapp.com",
  projectId: "car-zone-7b44e",
  storageBucket: "car-zone-7b44e.appspot.com",
  messagingSenderId: "477578606323",
  appId: "1:477578606323:web:96f51a9acef125b0b2a986",

  // env.local
  // REACT_APP_apiKey=AIzaSyAAykvbWH_5rwAeySNMwVyp4ZG48c6F9PU
  // REACT_APP_authDomain=car-zone-7b44e.firebaseapp.com
  // REACT_APP_projectId=car-zone-7b44e
  // REACT_APP_storageBucket=car-zone-7b44e.appspot.com
  // REACT_APP_messagingSenderId=477578606323
  // REACT_APP_appId=1:477578606323:web:96f51a9acef125b0b2a986
  // env.local
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
