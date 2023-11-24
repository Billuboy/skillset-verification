import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3F3NfMvYtTbzVV7aYHMmS4OrZsGcwHiA',
  authDomain: 'skillset-verification-41b77.firebaseapp.com',
  projectId: 'skillset-verification-41b77',
  storageBucket: 'skillset-verification-41b77.appspot.com',
  messagingSenderId: '1093040444265',
  appId: '1:1093040444265:web:ac2ae5ce46d028904b63f8',
  measurementId: 'G-79MG1SF0JX',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export const db = firebase.firestore();

export default firebase;
