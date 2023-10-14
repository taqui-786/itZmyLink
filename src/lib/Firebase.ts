
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain:"projectfriendz-45b49.firebaseapp.com",
    projectId: "projectfriendz-45b49",
    storageBucket: "projectfriendz-45b49.appspot.com",
    messagingSenderId: "186662584426",
    appId: "1:186662584426:web:b37a6002f57c2af7578a13",
    measurementId:"G-ZCMDL02FYD"
    };
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    export{ storage };