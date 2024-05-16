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

// {
//     "phoneNumber": null,
//     "id": "q8ITqijyMJEhWJeIEbRW",
//     "uid": "104494384134089029230",
//     "createdAt": {
//         "seconds": 1715850953,
//         "nanoseconds": 570000000
//     },
//     "email": "mavadiyadivyesh56@gmail.com",
//     "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJOzeUPcRBma4sy6MBh8sdy54iStBXy9y7vVBrHzODqgDiJIc45=s96-c",
//     "displayName": "Divyesh Mavadiya",
//     "providerId": "google.com",
//     "createdBy": "knpSrvWWiwU7YVTGQ7wN9oPyces1"
// }
