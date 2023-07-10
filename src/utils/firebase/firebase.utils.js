import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCweP5rgc9gdiwlaLBC-8qbUFft-5AQ850',
  authDomain: 'star-clothing-db-5b724.firebaseapp.com',
  projectId: 'star-clothing-db-5b724',
  storageBucket: 'star-clothing-db-5b724.appspot.com',
  messagingSenderId: '481604436164',
  appId: '1:481604436164:web:4d1fb58a75ab5acad4c991',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
