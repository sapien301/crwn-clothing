import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCnFt1NvhbY6y9rZIClYRsIKPLEyLPchF0",

  authDomain: "crwn-db-a3a7c.firebaseapp.com",

  projectId: "crwn-db-a3a7c",

  storageBucket: "crwn-db-a3a7c.appspot.com",

  messagingSenderId: "854964594869",

  appId: "1:854964594869:web:88cb94cd1ebd3874bc76fc",

  measurementId: "G-0CE4EP8E7L",
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt :'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
