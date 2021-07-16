import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCkSd-F_NnRFOWu66jnnobkHMERHf09j0o',
  authDomain: 'music-2f209.firebaseapp.com',
  projectId: 'music-2f209',
  storageBucket: 'music-2f209.appspot.com',
  appId: '1:351608895632:web:a6d554733664f4462a8015',
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch(() => {

});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
