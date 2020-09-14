import firebase from 'firebase/app';
import firebaseConfig from './config/firebase';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export { firebase };
