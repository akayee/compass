import firebase from "./firebase"
import "firebase/database"
import "firebase/auth"

export const ref = firebase.database().ref("/compass/")
export const firebaseAuth = firebase.auth()