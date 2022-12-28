import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7w49kVEmM0NL5giT9x5ozoXSfZ4tDFjU",
    authDomain: "user-2feeb.firebaseapp.com",
    databaseURL: "https://user-2feeb-default-rtdb.firebaseio.com",
    projectId: "user-2feeb",
    storageBucket: "user-2feeb.appspot.com",
    messagingSenderId: "351663120907",
    appId: "1:351663120907:web:fb28f6bea81a3f1171dd0e",
    measurementId: "G-5XJ07ZML2R"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
    })
        .catch((error) => {
            console.log(error)
        })
}