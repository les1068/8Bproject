import { StatusBar } from 'expo-status-bar';
import React, { useId, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import  {db}  from '../firebaseConfig';
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
import TestCom from '../Components/TestCom';
  
const MainScreen = ({route,navigation})=>{
    const {nickname} = route.params;

    const [flag,setFlag] = useState(true);
    const [students,setStudents] = useState([]);



    const readStudents = async ()=>{ //DB에서 학생데이터 가져오기
      try{
       const docSnap = await getDocs(collection(db,"student"));
       const studentsNum = docSnap.docs.length; //학생 수
       console.log(studentsNum);
       setStudents(docSnap.docs.map(doc=>doc.id))
      }catch(error){
        console.log(error.message)
      }
    }
    
    if(flag){
      setFlag(false);
      readStudents();
    }
    
    return(
    <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      {
      students.map((item,idx)=>(
        <View style={styles.listbox}>
        <TouchableOpacity onPress={()=>{ 
            console.log(students[idx])
            //console.log(names[0])
            navigation.navigate("Std",{student:students[idx]})}
            }>
            <View style={styles.questionBox}>

            <Image source={require('../assets/std1.png')} style={styles.image} />
           <Text style={styles.std}>{students[idx]}</Text>
          </View>
          </TouchableOpacity>
        </View>
      ))}
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
      marginTop:15,
      marginLeft:15,
      marginRight:15,
      alignItems: 'center'
    },
    listbox:{ 
      backgroundColor:'#fff',
      borderRadius: 15,
      borderWidth:2,
      borderColor:'#5614B0',
      borderStyle:'solid',
      marginBottom:15,
      alignItems: 'center'
    },
    inputView:{ 
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
      width:'100%',
      height:'100%',
      borderWidth:2, 
      borderColor:'black'
    },
    image: {
      width: 110,
      height: 110,
      marginBottom: 8,
    },
    std: {
      fontSize: 18,
      fontWeight: "bold",
    }
  });

export default MainScreen;