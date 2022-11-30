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
  getDoc, 
  setDoc} from "firebase/firestore"; 

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

  export const updateDB = async (props,qid,answer)=>{//nickname, question id, answer
    try{
      const docRef = doc(db, "User",props); //props is nickname.
      await updateDoc(docRef, 
        `${qid}`,answer //qid: answer 형태로 DB에 Update
      );
      alert("Updated!!")
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

  export const readfromDB = async ()=>{ //DB Data 읽기
    try{
      const data = await getDocs(collection(db, "question" ))
      var result = data.docs.map(doc => ({ ...doc.data()}));
    }catch(error){
      console.log(error.message)
    }
  }

  export const addNickname = async (props)=>{
    try{
      await setDoc(doc(db,"User",props), {
        Nickname: props,
      });
      alert("Added!!")
    }catch(error){
      console.log(error.message)
    }
  }

  export const addAnswer = async (props,answer)=>{
    try{
      await setDoc(doc(db,"User",props), {
        m_question: answer
      });
      alert("Added!!")
    }catch(error){
      console.log(error.message)
    }
  }
  




