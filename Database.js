import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,Text, DynamicColorIOS } from 'react-native';
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
  setDoc,UpdateData} from "firebase/firestore"; 

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

  export const queryDB = async ()=>{
    try{
      const q = await query(collection(db, "question"), where("sub_question1_1","==","Anything equivalent to 85.75=3.25+7.5*p"));
      const singleDoc = await getDocs(q);
      console.log(singleDoc)
    }catch(error){
      console.log(error.message)
    }
  }

  export const updateDB = async (props,qid,answer)=>{//nickname, question id, answer
    try{
      const docRef = doc(db, "User",props); //props is nickname.
      await updateDoc(docRef, 
        `${qid}`,answer, //qid: answer 형태로 DB에 Update
      );
      alert("Updated!!")
    }catch(error){
      console.log(error.message)
    }
  }
  
  export const updateScore = async (props)=>{//nickname, Score
    const [score,setScore] = useState(0);
    try{
      setScore(score+1);
      const docRef = doc(db, "student",props); //props is nickname.
      await updateDoc(docRef,{
        Score:score
      });
      alert("addScore")
    }catch(error){
      console.log(error.message)
    }
  }

  export const readfromDB = async ()=>{ //DB Data 읽기
    try{
     const docRef = doc(db,"question","question1");
     const docSnap = await getDoc(docRef);
     const result = docSnap.get("main_Q1");

     return result;
    }catch(error){
      console.log(error.message)
    }
  }

  export const addName = async (props)=>{
    try{
      await setDoc(doc(db,"student",props), {
        Name: props,
        Score:0
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
  




