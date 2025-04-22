import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log("✅ Firebase 環境變數測試：");
console.log("API_KEY =", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
console.log("AUTH_DOMAIN =", process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
