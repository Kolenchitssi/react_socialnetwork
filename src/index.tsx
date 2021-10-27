import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout/Layout";
import Routes from "./components/routes/Routes";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeqesX7K-ZMXz3pJAvnGYM_Lf4Y89Fsjc",
  authDomain: "reactsocialnet-be37d.firebaseapp.com",
  projectId: "reactsocialnet-be37d",
  storageBucket: "reactsocialnet-be37d.appspot.com",
  messagingSenderId: "341997696660",
  appId: "1:341997696660:web:34ecd89bdd4f77e7032681",
  measurementId: "G-GB0B1ZYWP1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
