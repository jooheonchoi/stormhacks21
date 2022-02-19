import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQXyLW5d4FCTMkeQjM89PZvDYuBpMJfAc",
    authDomain: "stormhacks-34483.firebaseapp.com",
    projectId: "stormhacks-34483",
    storageBucket: "stormhacks-34483.appspot.com",
    messagingSenderId: "453255446534",
    appId: "1:453255446534:web:6458498021dc602b110387",
    measurementId: "G-YMF3DSPFH9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

