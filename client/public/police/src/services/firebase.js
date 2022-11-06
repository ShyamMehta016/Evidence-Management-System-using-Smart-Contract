import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCv0YBrQdi78Puwxdp3H1OJF_nw0Aw452E",
  authDomain: "evidencemanagementsystempolice.firebaseapp.com",
  projectId: "evidencemanagementsystempolice",
  storageBucket: "evidencemanagementsystempolice.appspot.com",
  messagingSenderId: "168668532519",
  appId: "1:168668532519:web:3a67b81424ad696f97e302",
  measurementId: "G-0R7Y4XT51X"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
