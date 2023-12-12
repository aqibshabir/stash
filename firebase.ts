import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqC0TRDCCmG82Ix-nkk_7R1IJwVCi2r6g",
  authDomain: "dropbox-clone-b0637.firebaseapp.com",
  projectId: "dropbox-clone-b0637",
  storageBucket: "dropbox-clone-b0637.appspot.com",
  messagingSenderId: "586135330560",
  appId: "1:586135330560:web:25c2492e141aa3b6175de5",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
