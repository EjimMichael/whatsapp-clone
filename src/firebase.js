const firebaseConfig = {
    apiKey: "AIzaSyAGCcJHUpXNCOqzgDAwe4EhG40df9pLEUY",
    authDomain: "whatsapp-clone-a695d.firebaseapp.com",
    projectId: "whatsapp-clone-a695d",
    storageBucket: "whatsapp-clone-a695d.appspot.com",
    messagingSenderId: "796470560309",
    appId: "1:796470560309:web:53d4a4751c5787f7cb537c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;