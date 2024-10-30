// Import the functions you need from the SDKs you need
import showAlert from "components/alerts/alert";
import { initializeApp } from "firebase/app";
import {getAuth,onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import store from "store";
import { setUser } from "store/auth";
import { userHandle } from "utils";

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    // authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    // projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    // storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    // messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    // appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,

    apiKey: "AIzaSyBnyHrvjyxj_UeD3YzZ0DnzUT536hGJP-w",
    authDomain: "prototurk-instagram-91498.firebaseapp.com",
    projectId: "prototurk-instagram-91498",
    storageBucket: "prototurk-instagram-91498.appspot.com",
    messagingSenderId: "93882668273",
    appId: "1:93882668273:web:29de557a4b3923076c0550"
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth()

onAuthStateChanged(auth,user=>{
    /* 
    onAuthStateChanged, kullanıcının oturum açma durumu değiştiğinde tetiklenir. 
    Yani, kullanıcı giriş yaptığında veya çıkış yaptığında bu işlev çalışır.
    kullanıcının giriş cıkısına gore durumu guncellenecek
    */
    userHandle(user || false)   
})

export const login = async (email,password) =>
{
    try{
      const response =  await signInWithEmailAndPassword(auth,email,password)
      console.log(response.user)
    }catch(error)
    {
        showAlert('error',error.code)
    }
    
}