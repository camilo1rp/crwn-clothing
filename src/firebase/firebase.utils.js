import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyC5T-OGBsoht_CW3EjOU1ltL_2WgEKPur0",
  authDomain: "crwn-db-5ca3a.firebaseapp.com",
  projectId: "crwn-db-5ca3a",
  storageBucket: "crwn-db-5ca3a.appspot.com",
  messagingSenderId: "1013738895803",
  appId: "1:1013738895803:web:febbd733544ec27b03ac9e"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email }= userAuth;  
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
