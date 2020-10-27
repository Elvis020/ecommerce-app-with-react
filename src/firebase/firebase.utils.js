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


// Storing user into the firestore db from our userAuth
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    // console.log()
    // Authenticating the user
    const userReference = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userReference.get()

    // Performing CRUD on the user after authentication and storing user data to db
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userReference.set({
              displayName:displayName,
              email:email,
              createdAt:createdAt
            });
        } catch (error) {
            console.error("Sorry 😞, couldn't add user to firestore db",error.message); 
        }
    }
    return userReference;
}



// For google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

