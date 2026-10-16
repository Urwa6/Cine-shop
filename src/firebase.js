import { initializeApp } from 'firebase/app';
import {initializeAuth,getReactNativePersistence,} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCgiLCMDpiy287c1uHOiSYVkm8zpilONHU',
  authDomain: 'cine-shop.firebaseapp.com',
  projectId: 'cine-shop',
  storageBucket: 'cine-shop.firebasestorage.app',
  messagingSenderId: '200689650042',
  appId: '1:200689650042:web:009edd6d95af9a3e9deec3',
};
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


