import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCq0sXE5SuTJ8rbO7iDksn_U4U__FFzhgY",
  authDomain: "crwn-db-13688.firebaseapp.com",
  projectId: "crwn-db-13688",
  storageBucket: "crwn-db-13688.appspot.com",
  messagingSenderId: "866886982556",
  appId: "1:866886982556:web:7a05a6c6f89b9d2f758659",
  measurementId: "G-N4LMRWR4TB"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;