 
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOPvsnyc0iAyiqDl4mmriJlSaZPF2Tmlk",
    authDomain: "chat-d6241.firebaseapp.com",
    projectId: "chat-d6241",
    storageBucket: "chat-d6241.appspot.com",
    messagingSenderId: "833141023662",
    appId: "1:833141023662:web:b360c98fbc793cb4769e3f",
    measurementId: "G-HFDVK90DXC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider ,firebaseApp}
export default db