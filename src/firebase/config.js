// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2hlI07VCQ-2YXFobd4b1G18Nov7R8GXg",
  authDomain: "eliana-fc5e4.firebaseapp.com",
  projectId: "eliana-fc5e4",
  storageBucket: "eliana-fc5e4.appspot.com",
  messagingSenderId: "567562225044",
  appId: "1:567562225044:web:ad4cc2539be7a01f863b81",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB2hlI07VCQ-2YXFobd4b1G18Nov7R8GXg",
//   authDomain: "eliana-fc5e4.firebaseapp.com",
//   projectId: "eliana-fc5e4",
//   storageBucket: "eliana-fc5e4.appspot.com",
//   messagingSenderId: "567562225044",
//   appId: "1:567562225044:web:ad4cc2539be7a01f863b81"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);