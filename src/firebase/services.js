import { USERS } from "./collections";
import { auth, db } from "./config";
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
} from "firebase/firestore";

export const getUserData = async (email) =>
  new Promise((resolve) => {
    const getUserQuery = query(
      collection(db, USERS),
      where("email", "==", email)
    );
    getDocs(getUserQuery)
      .then((response) => {
        const arr = [];
        response.docs.forEach((doc) => {
          arr.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        if (arr.length > 0) resolve(arr[0]);
        else resolve(null);
      })
      .catch(() => {
        resolve(null);
      });
  });

export const addUser = async (userData) =>
  new Promise((resolve) => {
    const documentReference = doc(collection(db, USERS));
    setDoc(documentReference, {
      ...userData,
      createdBy: auth?.currentUser?.uid,
      createdAt: new Date(),
      id: documentReference.id,
    })
      .then(() => resolve(true))
      .catch(() => {
        resolve(false);
      });
  });
