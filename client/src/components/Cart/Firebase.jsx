import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAYOHmorNSHyb12ewnoNkqtuPdCaqumCjE",
  authDomain: "apps-b2429.firebaseapp.com",
  projectId: "apps-b2429",
  storageBucket: "apps-b2429.appspot.com",
  messagingSenderId: "982355209430",
  appId: "1:982355209430:web:7e76eb957ff98806bded77"
  
  };
  firebase.initializeApp(firebaseConfig);
  
export default firebase