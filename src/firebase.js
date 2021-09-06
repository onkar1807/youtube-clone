import firebase from 'firebase/compat/app'
import 'firebase/auth'
import "firebase/messaging"


const firebaseConfig = {
    apiKey: "AIzaSyC_kn6jd3R8XyA8Tk4-IQyg7jCUV-3TTE4",
    authDomain: "clone-ytube533.firebaseapp.com",
    projectId: "clone-ytube533",
    storageBucket: "clone-ytube533.appspot.com",
    messagingSenderId: "990787945906",
    appId: "1:990787945906:web:ca50a9542d0cf5f8c9d0ab"
}


firebase.initializeApp(firebaseConfig);

export function auth() {
    return firebase.auth()
}
