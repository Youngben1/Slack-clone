import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDH6rG-sQHUbugrNLe5-Cg9G-FX8pIpTrs",
    authDomain: "lack-f84fd.firebaseapp.com",
    projectId: "lack-f84fd",
    storageBucket: "lack-f84fd.appspot.com",
    messagingSenderId: "150962907293",
    appId: "1:150962907293:web:c1533992abc8f417ff0c74"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };