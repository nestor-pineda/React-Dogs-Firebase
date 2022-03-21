import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCmrud1jsw3ACekYtAT89Pa7uIbO87Np1c",
  authDomain: "animals-17ebe.firebaseapp.com",
  projectId: "animals-17ebe",
  storageBucket: "animals-17ebe.appspot.com",
  messagingSenderId: "883098300605",
  appId: "1:883098300605:web:05ad5a18bac9fbbae347d4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
