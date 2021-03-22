import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCRAQVCGoDykJ9qV2oez1cpT3SOTJTNhU4",
    authDomain: "lahacks2021.firebaseapp.com",
    databaseURL: "https://lahacks2021-default-rtdb.firebaseio.com",
    projectId: "lahacks2021",
    storageBucket: "lahacks2021.appspot.com",
    messagingSenderId: "24217381227",
    appId: "1:24217381227:web:24e5382755d44a8601c42e",
    measurementId: "G-VG845EDLLL"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default firebase;