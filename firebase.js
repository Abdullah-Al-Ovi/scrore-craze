
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV0hCCgBbs2N_rQNmESkGmP9yo8Lg-odw",
  authDomain: "scrore-craze.firebaseapp.com",
  projectId: "scrore-craze",
  storageBucket: "scrore-craze.appspot.com",
  messagingSenderId: "802058746705",
  appId: "1:802058746705:web:f960442bbaff4ebef67170"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);