import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyB0n5yZL1cKPn_R6E8LFgBAMo34MCpduEk",
	authDomain: "fb-mern-clone-57398.firebaseapp.com",
	databaseURL: "https://fb-mern-clone-57398.firebaseio.com",
	projectId: "fb-mern-clone-57398",
	storageBucket: "fb-mern-clone-57398.appspot.com",
	messagingSenderId: "76761224105",
	appId: "1:76761224105:web:b957b5b6d9a39c1ebc6ab8",
	measurementId: "G-G5LNE86N3Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
