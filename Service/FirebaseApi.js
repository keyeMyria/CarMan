import * as firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyB-qx6oFxXPJb4wzUdK0iweuSgFf8uHEw4",
    authDomain: "carman-faa18.firebaseapp.com",
    databaseURL: "https://carman-faa18.firebaseio.com",
    projectId: "carman-faa18",
    storageBucket: "carman-faa18.appspot.com",
    messagingSenderId: "1051365856529",
});

export default class FirebaseApi {

    static signUpWithEmailAndPassword = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

    static signInWithEmailAndPassword = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

    static onAuthStateChanged = (callback) => firebase.auth().onAuthStateChanged(callback);

    static signOut = ()=> firebase.auth().signOut();

}