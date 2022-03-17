import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACk9CWr3k3FI8s8jxSvbgEr8oxdhhXzzY",
    authDomain: "fir-photos-5e1e3.firebaseapp.com",
    projectId: "fir-photos-5e1e3",
    storageBucket: "fir-photos-5e1e3.appspot.com",
    messagingSenderId: "304709571565",
    appId: "1:304709571565:web:876e5e186f51f6c7aa0de4",
    measurementId: "G-XHFLT0QTNJ"
  };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore()
      const auth = firebase.auth()
      
      export {firebase}
      export {db, auth}