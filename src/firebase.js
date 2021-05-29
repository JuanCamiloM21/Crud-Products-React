import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALdZxnB-ZW67srPKKR6On0Ac6ScbIIwMM',
  authDomain: 'crud-products-react.firebaseapp.com',
  projectId: 'crud-products-react',
  storageBucket: 'crud-products-react.appspot.com',
  messagingSenderId: '869461065069',
  appId: '1:869461065069:web:e38147b90781930f6a2e64',
};

const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();

const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, db, providerGoogle, providerFacebook };
