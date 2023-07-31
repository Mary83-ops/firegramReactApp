import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFsdqNkyPA-0B1e5Wqa21SNt-aDPzIP68",
    authDomain: "dan-firegram-bd286.firebaseapp.com",
    projectId: "dan-firegram-bd286",
    storageBucket: "dan-firegram-bd286.appspot.com",
    messagingSenderId: "164507447616",
    appId: "1:164507447616:web:40631d7e07770697880aa5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  
  export { projectStorage, projectFirestore };