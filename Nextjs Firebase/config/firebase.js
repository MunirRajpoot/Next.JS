import { initializeApp } from "firebase/app";


const firebaseConfig = {
    // apiKey: process.env.APIKEY,
    apiKey: "AIzaSyB7NQIYG1dY784GhCrPTYkRBeJFYdaGQ2E",
    authDomain: "nextjs-fireabase.firebaseapp.com",
    projectId: "nextjs-fireabase",
    storageBucket: "nextjs-fireabase.appspot.com",
    messagingSenderId: "530162041084",
    appId: "1:530162041084:web:33da19d2c41cf3fc561779"
};


const app = initializeApp(firebaseConfig);