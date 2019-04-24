import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyARI_4iZHpuLZUo2pAEPCgie3UfN9Znohw",
  authDomain: "shoe-seeker.firebaseapp.com",
  databaseURL: "https://shoe-seeker.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
