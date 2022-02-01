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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
