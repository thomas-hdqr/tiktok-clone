import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-plghlLfdctzVEWi2HH_g_Gp3VSnwI74",
    authDomain: "tiktok-clone-694f0.firebaseapp.com",
    projectId: "tiktok-clone-694f0",
    storageBucket: "tiktok-clone-694f0.appspot.com",
    messagingSenderId: "533337314441",
    appId: "1:533337314441:web:fb9df2805cc781f40f6258",
    measurementId: "G-CX38HDC42F"
  };

const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

  export default db;