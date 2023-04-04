
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBAU344CG8m1vqJTYHhWaG1xlRSguhFFIs",
  authDomain: "tiktok---jornada-251cc.firebaseapp.com",
  projectId: "tiktok---jornada-251cc",
  storageBucket: "tiktok---jornada-251cc.appspot.com",
  messagingSenderId: "1003416501343",
  appId: "1:1003416501343:web:3d77f74d0831f842552fea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db