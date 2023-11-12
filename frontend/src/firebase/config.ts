import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectStorageEmulator, getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyBTv-4jr4aP79jhFw_1S2AdGY6190KpRWg",
  authDomain: "fir-test-65530.firebaseapp.com",
  projectId: "fir-test-65530",
  storageBucket: "fir-test-65530.appspot.com",
  messagingSenderId: "190756279472",
  appId: "1:190756279472:web:80f39bee126951380f9775",
  measurementId: "G-L0WFZWB2MD",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app, "asia-northeast1");
export const storage = getStorage(app);

if (["localhost", "127.0.0.1"].includes(location.hostname)) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
  connectStorageEmulator(storage, "127.0.0.1", 9199);
}

export function getHttpsFunctionUrl(name: string) {
  return import.meta.env.VITE_FIREBASE_HTTPS_FUNCTIONS_URL.replace("FUNCTION_NAME", name);
}
