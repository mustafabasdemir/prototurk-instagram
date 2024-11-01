// Import the functions you need from the SDKs you need
import { ShowAlertMessage } from "components/alertMessage/AlertMessage";
import showAlert from "components/alerts/alert";
import { initializeApp } from "firebase/app";
import {getAuth,onAuthStateChanged,signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import store from "store";
import { setUser } from "store/auth";
import { userHandle } from "utils";
import {getFirestore,doc,getDoc,setDoc}  from "firebase/firestore"






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
const db = getFirestore(app)



onAuthStateChanged(auth,async user=>{
    /* 
    onAuthStateChanged, kullanıcının oturum açma durumu değiştiğinde tetiklenir. 
    Yani, kullanıcı giriş yaptığında veya çıkış yaptığında bu işlev çalışır.
    kullanıcının giriş cıkısına gore durumu guncellenecek
    */

    if(user){
        const dbUser = await getDoc(doc(db,"users",user.uid))
        let data ={
            uid: user.uid,
            fullName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            ...dbUser.data()
        }
        console.log(data)
        userHandle(data)
    }else{
        userHandle(false)   
    }
    
})




export const login = async (email,password) =>
{
    try{
      const response =  await signInWithEmailAndPassword(auth,email,password)
      return response
      //console.log(response.user)
    }catch(error)
    {
        ShowAlertMessage('error', error);
        alert(error.code)
    }
    
}


//kullanıcının cıkıs yapması için
export const logout = async ()=> {
    try{
        await signOut(auth)
    }catch(error)
    {
        showAlert('error',error.code)
        //console.log(error.code)
    }
}

export const register = async (email,full_name,username,password) =>
{
    
    try{
            const user=await getDoc(doc(db,"usernames",username))

            if(user.exists()){  //kullanici adını kullanan varsa
                ShowAlertMessage("error", "kullanıcı adını başkası kullanıyor.");
            }
            else
            {
                const response =  await createUserWithEmailAndPassword(auth,email,password)

                if (response.user) 
                {

                    await setDoc(doc(db,"usernames",username),{
                        user_id:response.user.uid
                    })


                    //user tablosune ekle
                    await setDoc(doc(db, "users", response.user.uid), {
                    fullName: full_name,
                    userName: username,
                    followers: [],
                    following: [],
                    notifications: [],
                    });

                    await updateProfile(auth.currentUser, {
                    displayName: full_name,
                    });
                    ShowAlertMessage("success", "Kayıt işlemi başarılı!");

                    return response.user;
                }
            }
        

    }catch(error)
    {
        ShowAlertMessage('error', error);
    }
        
}