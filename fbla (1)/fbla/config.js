import firebase from 'firebase';

/*
const firebaseConfig = {
  apiKey: "AIzaSyDSvLsAaBjmgj6RXXeVEaLDd9-ugVeHpaA",
  authDomain: "isearch-409c0.firebaseapp.com",
  projectId: "isearch-409c0",
  storageBucket: "isearch-409c0.appspot.com",
  messagingSenderId: "850247459802",
  appId: "1:850247459802:web:1d9f141e6a4975c935d6e3",
  measurementId: "G-KRXXH0EBMQ"
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyDUOcD1k-6c1_M5Jc9hnpbpSuAw8eJy-RE",
  authDomain: "fbla-c8ed9.firebaseapp.com",
  projectId: "fbla-c8ed9",
  storageBucket: "fbla-c8ed9.appspot.com",
  messagingSenderId: "267303996578",
  appId: "1:267303996578:web:b0755ff73e223a2e761bfb",
  measurementId: "G-SS0CS0KEJ0"
};

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();