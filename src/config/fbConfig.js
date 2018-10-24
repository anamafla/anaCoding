import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "anacoding2018.firebaseapp.com",
  databaseURL: "https://anacoding2018.firebaseio.com",
  projectId: "anacoding2018",
  storageBucket: "anacoding2018.appspot.com",
  messagingSenderId: "458360476947"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
