import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoWTNYy5eyKxqKeXdJZDVVpw5s_b8eEPQ",
  authDomain: "myonline-clipboard.firebaseapp.com",
  projectId: "myonline-clipboard",
  storageBucket: "myonline-clipboard.appspot.com",
  messagingSenderId: "603229522717",
  appId: "1:603229522717:web:6d85752a9529f01ee86ff4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
