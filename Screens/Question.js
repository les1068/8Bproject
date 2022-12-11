import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { 
  addDoc, 
  collection, 
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query,
  Firestore} from "firebase/firestore";
  import  {db}  from '../firebaseConfig';

const Question = ({route,navigation}) =>{
  const [flag, setFlag] = useState(true) //무한루프를 빠져나가기 위한 flag
  const [answer,setAnswer] = useState('') //TextInput에 답을 입력받는 answer 부분
  const [step, setStep] = useState([]) //각 strategy에 대한 step문제를 담을 배열
  const [stephandler, setStephandler] = useState(0); //readfromDB에서 받아온 stepNum을 다루는 stephandler
  
  const {qNum} = route.params; //문제 번호를 전달받는 qNum변수
  const {question} = route.params; //Question의 Text를 전달받는 변수
  const {strategy} = route. params; //Select에서 전달받은 strategy 타입(A,B,C)을 전달받을 변수

  const [progress,setProgress] = useState(1); //현재의 진행정도를 알려주는 progress
  const [number,setNumber] = useState(1); //progress를 증가시키기 위한 용도
 
  const readfromDB = async ()=>{ //DB Data 읽기
    try{
     const docRef = doc(db,"question",`question${qNum}`);
     const docSnap = await getDoc(docRef);
     const stepNum = docSnap.get(`${strategy}.stepnum`)
     setStephandler(stepNum);
     for(let i=0;i<stepNum;i++){ //stepArray에 각step의 대한 문제 넣기
      const test = docSnap.get(`${strategy}.step${i+1}`)
      setStep(step => [...step,test])
     }
    }catch(error){
      console.log(error.message)
    }
  }

  if(flag){
    setFlag(false)
    readfromDB();
  }
 
    return(
        <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{question}</Text> 
      </View>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>
          {`step${progress}`}
          </Text> 
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>
          {step[progress-1]}
        </Text>
        <TextInput style={styles.input} multiline={true} value={answer} onChangeText={setAnswer}/>
        <TouchableOpacity onPress={()=>{
          //DB에 데이터 전송, Next Step으로 이동
          //마지막 스텝이면 다시 SelectStrategy로 이동
          if(progress<stephandler)//현재 진행상황이 step의 수보다 작으면
          {
            setProgress(number+1)//Next Step으로 이동
            setNumber(number+1)//number증가.
            console.log(progress)
            console.log("hi")
          }else if(strategy=="strategyC"){ //마지막 strategyC이면 다시 SelectQuestion으로 간다.
            navigation.navigate("SelectQuestion",{complete:true})
          }
          else{
            console.log("else") //해당 strategy에 대한 모든 step을 완료하면 SelectStrategy로 간다.
            navigation.navigate("SelectStrategy",{qNum:qNum, question:question})
          }
        }}>
            <Text style={styles.btn}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {//전체적인 View
      flex: 1,
      backgroundColor: '#9999ff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
    },
    questionBox:{ //Question이 들어있는 Box
      paddingVertical: 10,
      paddingHorizontal:5,
      backgroundColor:'#fff',
      borderRadius: 15,
      borderWidth:2,
      borderColor:'#5614B0',
      borderStyle:'solid',
      marginBottom:15
    },
    inputView:{ //Button,Input들이 모여있는 View
      height:'40%',
      backgroundColor:'#fff',
      paddingVertical:25, //상,하
      paddingHorizontal:20, //좌,우
      borderWidth:2, 
      borderStyle:'solid', 
      borderColor:'#5614B0',
      borderRadius:20
    },
    btn:{ //Button
      marginTop:30,
      //fontWeight:"bold",
      textAlign:'center',
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius: 10,
      backgroundColor:'#6666ff'
    },
    input:{ //답을 입력받는 TextInput
      flexShrink:1, //Input 줄바꿈
      width:'100%',
      height:'100%',
      borderWidth:2, 
      borderColor:'black'
    }
  });
  
  export default Question;