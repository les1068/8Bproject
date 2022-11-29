import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import  {db}  from '../firebaseConfig';
import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query} from "firebase/firestore"; 
import * as DBfunction from '../Database'

const MainQuestion1=(props)=>{
  const [flag,setFlag] = useState(true)
  const [answer,setAnswer] = useState()

  const readfromDB = async ()=>{ //DB Data 읽기
    try{
      const data = await getDocs(collection(db, "question" ))
      setQuestion(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
    }catch(error){
      console.log(error.message)
    }
  }

  if(flag){ 
    readfromDB()//Question DB읽기
    setFlag(false) //루프 탈출
  }

    return(
    <View style={styles.container}>
      <View style={styles.questionBox}>
       <Text style={{fontWeight:"bold"}}>{`Todd orders pictures from a photographer. Each picture costs $7.50. A one-time shipping fee of $3.25 is added to the cost of the order. The total cost of Todd’s order before tax is $85.75.`}</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>What do you think the problem is asking you to do?</Text>
        <TextInput 
        style={styles.input}
        multiline={true} />
      </View>
      <Button title='→' color='#6666ff' onPress={()=>{
        props.navigation.navigate("SelectStrategy1")
      }}/>
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
      marginBottom:15,
      width:400,
      height:100
    },
    inputView:{ //Button들이 모여있는 View
      height:'30%',
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
      fontSize:32,
      textAlign:'center',
      width: 50,
      height: 50,
      borderRadius: 35,
      backgroundColor:'#6666ff'
    },
    input:{ //답을 입력받는 TextInput
      flexShrink:1, //Input 줄바꿈
      width:350,
      height:150,
      borderWidth:2, 
      borderColor:'black'
    }
  });

export default MainQuestion1;