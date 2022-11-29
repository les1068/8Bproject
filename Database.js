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
  query,
  Firestore,
  getDoc, } from "firebase/firestore"; 



  export const deletefromDB = async ()=>{
    try{
      const docRef = doc(db, "user", id);
      await deleteDoc(docRef);
      alert("Deleted!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }

  export const updateDB = async ()=>{
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

  export const queryDB = async ()=>{
    try{
      const q = query(collection(db, "user"), where("m_question"));
      const singleDoc = await getDocs(q);
      comsole.log(singleDoc)
    }catch(error){
      console.log(error.message)
    }
  }

  const readfromDB = async ()=>{ //DB Data 읽기
    try{
      const data = await getDocs(collection(db, "question" ))
      var result = data.docs.map(doc => ({ ...doc.data()}));
    }catch(error){
      console.log(error.message)
    }
    return result;
  }

  export const addtoDB = async (answer)=>{
    try{
      await addDoc(collection(db, "question" ), {
        addID: {answer},
      });
      alert("Added!!")
    }catch(error){
      console.log(error.message)
    }
  }
  




