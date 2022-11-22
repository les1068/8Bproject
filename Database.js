import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,Text } from 'react-native';
import  {db}  from './firebaseConfig';
import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query } from "firebase/firestore"; 
const Database = ()=>{
  const [addID, setAddID] = useState('');
  const [addPW, setAddPW] = useState('');
  const [addName, setAddName] = useState(''); 
  const [id, setID] = useState('');
  const [users, setUsers] = useState();
  const deletefromDB = async ()=>{
    try{
      const docRef = doc(db, "user", id);
      await deleteDoc(docRef);
      alert("Deleted!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }

  const updateDB = async ()=>{
    try{
      const docRef = doc(db, "user", id);
      await updateDoc(docRef, {
        addID: addID,
        addPW: addPW
      });
      alert("Updated!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }

  const queryDB = async ()=>{
    try{
      const q = await query(collection(db, "user" ), where('addName',"==","test23"))
      const singleDoc = await getDocs(q);
      console.log(singleDoc)
    }catch(error){
      console.log(error.message)
    }
  }

  const readfromDB = async ()=>{ //DB Data 읽기
    try{
      const data = await getDocs(collection(db, "user" ))
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }catch(error){
      console.log(error.message)
    }
  }

  const addtoDB = async ()=>{
    try{
      await addDoc(collection(db, "user" ), {
        addID: addID,
        addPW: addPW,
        addName: addName,
      });
      alert("Added!!")
      setAddName("")
      setAddAge("")
    }catch(error){
      console.log(error.message)
    }
  }
}

export default Database;