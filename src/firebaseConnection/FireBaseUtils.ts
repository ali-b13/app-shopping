 import firebase from 'firebase/app'
 import {getAuth ,GoogleAuthProvider ,signInWithPopup} from 'firebase/auth'
 import {initializeApp }from 'firebase/app'
const  firebaseConfig = {
  apiKey: "AIzaSyDmfqKmbwlaCLZHW8ptqCrGRmAn_TCT72M",
  authDomain: "ali-database.firebaseapp.com",
  projectId: "ali-database",
  storageBucket: "ali-database.appspot.com",
  messagingSenderId: "643675716787",
  appId: "1:643675716787:web:95dfe44c6c2e46287fc4c6",
  measurementId: "G-N74NVNKDHV"
};



const app =initializeApp(firebaseConfig)

export const Auth =getAuth(app)
 const provider = new GoogleAuthProvider()
export  const signUpWithGoogle=()=>{
  signInWithPopup(Auth,provider).then((res)=>{
    const name:any=res.user.displayName;
    const emailId:any=res.user.email;
    const userImage:any=res.user.photoURL;

   localStorage.setItem('username',name)
   localStorage.setItem('userEmail',emailId)
   localStorage.setItem('userImage',userImage)
  }

  ).catch((err)=>console.log(err))
 }