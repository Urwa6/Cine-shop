
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCgiLCMDpiy287c1uHOiSYVkm8zpilONHU',
  authDomain: 'cine-shop.firebaseapp.com',
  projectId: 'cine-shop',
  storageBucket: 'cine-shop.firebasestorage.app',
  messagingSenderId: '200689650042',
  appId: '1:200689650042:web:009edd6d95af9a3e9deec3',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
