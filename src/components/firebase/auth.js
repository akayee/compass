import { ref, firebaseAuth } from './constants'



export function logout () {
  return firebaseAuth.signOut()
}

export function login (email, pw) {
  return firebaseAuth.signInWithEmailAndPassword(email, pw)
}
export function currentUser(){
  return firebaseAuth.currentUser
}
//Adding Data Function
export function addData(data,table){
    let id= ref.child(`${table}`)
    .push().key;
    data.id=id;
    return ref.child(`${table}/${id}`)
      .set(data)
  }
  //Reading Data Function
  export function takeData(table){
    return ref.child(`${table}`)
  
  }

  //Update Data Function
export function updateData(data,table){
    let id= ref.child(`${table}`)
    .child(data.id);
    id.set(data);
      
  }
  //Delete Data Function
  export function deleteData(data,table){
    let id= ref.child(`${table}`)
    .child(data.id);
    id.remove();
  }  