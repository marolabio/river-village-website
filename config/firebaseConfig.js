import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBCJAGtrLuZxQBv7UvwoRvXQyowzW3GSRw',
  authDomain: 'river-village-website.firebaseapp.com',
  projectId: 'river-village-website',
  storageBucket: 'river-village-website.appspot.com',
  messagingSenderId: '130255407012',
  appId: '1:130255407012:web:479b4e74a4f012eda56331',
  measurementId: 'G-SXT4WNTXRF',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const analytics = firebase.analytics;

export { firebase, analytics };
