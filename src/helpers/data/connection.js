import firebase from 'firebase';
import 'firebase/auth';
import apiKeys from '../apiKeys';

const firebaseApp = () => {
  if (!firebase.apps.length) {   // what does it do?
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
};

export default firebaseApp;