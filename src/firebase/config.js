import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA8XVvGw1SapqsGXKJt9BFWZT2SQ_cuuzc",
    authDomain: "vue3-42336.firebaseapp.com",
    projectId: "vue3-42336",
    storageBucket: "vue3-42336.appspot.com",
    messagingSenderId: "454198414588",
    appId: "1:454198414588:web:dd197df23dfc5da4f85b79"
};

// init firbase

firebase.initializeApp(firebaseConfig)

// init firestore service

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }