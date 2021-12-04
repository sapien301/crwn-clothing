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

export const createUserProfileDocument = async(userAuth,additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if (!snapShot.exits){
    const {displayName, email} = userAuth;
    const createdAt = new Date();



    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log(error.message)
    }
  }   
  
  return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt :'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
