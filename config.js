import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAu7BTGWWICR0BIkkN0NrmJts60nKT-tcI",
  authDomain: "e-library-f1dd6.firebaseapp.com",
  projectId: "e-library-f1dd6",
  storageBucket: "e-library-f1dd6.appspot.com",
  messagingSenderId: "526612970604",
  appId: "1:526612970604:web:34e122e8df637899002c49"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
