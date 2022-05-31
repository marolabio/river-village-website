// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBCJAGtrLuZxQBv7UvwoRvXQyowzW3GSRw',
  authDomain: 'river-village-website.firebaseapp.com',
  projectId: 'river-village-website',
  storageBucket: 'river-village-website.appspot.com',
  messagingSenderId: '130255407012',
  appId: '1:130255407012:web:479b4e74a4f012eda56331',
  measurementId: 'G-SXT4WNTXRF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
