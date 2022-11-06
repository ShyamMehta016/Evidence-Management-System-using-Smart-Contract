import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAyFUfZwvCjiDCvUDXxzSvrKIID7edZ2Zw",
  authDomain: "evidencemanagementsystempublic.firebaseapp.com",
  projectId: "evidencemanagementsystempublic",
  storageBucket: "evidencemanagementsystempublic.appspot.com",
  messagingSenderId: "788512726574",
  appId: "1:788512726574:web:c41ffe4dfd02e61c2c49bf",
  measurementId: "G-GEXMW0979R"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
