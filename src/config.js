import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtV8SIyIbY5fUBOE6S7cv2tcvGGs1trW8",
    authDomain: "instagram-clone-d1577.firebaseapp.com",
    databaseURL: "https://instagram-clone-d1577.firebaseio.com",
    projectId: "instagram-clone-d1577",
    storageBucket: "instagram-clone-d1577.appspot.com",
    messagingSenderId: "378481220788",
    appId: "1:378481220788:web:3d9ccf90ea6412bd7ecbe1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };



