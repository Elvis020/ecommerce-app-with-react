import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
const config = {
    apiKey: "AIzaSyDFEuEFQJ8L9JFYU72m6CfiuBf1e4bHpls",
    authDomain: "crowndb-ecommerce.firebaseapp.com",
    databaseURL: "https://crowndb-ecommerce.firebaseio.com",
    projectId: "crowndb-ecommerce",
    storageBucket: "crowndb-ecommerce.appspot.com",
    messagingSenderId: "808436632656",
    appId: "1:808436632656:web:09be02c09972ec6288d555",
    measurementId: "G-GFBZRW4VY9"
}
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


// For google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

