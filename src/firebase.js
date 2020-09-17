

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAsbp3BtKkGggVTeLrbx4it1KY1nlXyYxs",
    authDomain: "todo-app-76299.firebaseapp.com",
    databaseURL: "https://todo-app-76299.firebaseio.com",
    projectId: "todo-app-76299",
    storageBucket: "todo-app-76299.appspot.com",
    messagingSenderId: "210330569337",
    appId: "1:210330569337:web:b371049ad154b43e08a2a8",
    measurementId: "G-NR4G52DG02"
});

const db = firebaseApp.firestore();

export default db;