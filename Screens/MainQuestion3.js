import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { updateDB } from '../Database';

const MainQuestion3=({route,navigation})=>{
  const [answer,setAnswer] = useState('')
  const {nickname} = route.params;
  const qid = "m_question3"
    return(
    <View style={styles.container}>
      
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `Jennifer has 84.5 yards of fabric to make curtains. She makes 6 identical curtains and has 19.7 
          yards of fabric remaining. How many yards of fabric does Jennifer use per curtain?`
          }</Text> 
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>What do you think the problem is asking you to do?</Text>
        <TextInput style={styles.input} multiline={true} value={answer} onChangeText={setAnswer}/>
      </View>
      <TouchableOpacity
        onPress={()=>{
        updateDB(nickname,qid,answer)
        navigation.navigate("SelectStrategy3",{nickname:nickname})
      }}>
        <Text style={styles.btn} >→</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  btn1:{ //Button
    marginBottom: '30px',
    //fontWeight:"bold",
    fontSize:32,
    textAlign:'center',
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor:'#6666ff',
    marginRight:'700px',
    alignContent:'flex-start'
    
  },
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
      width:'100%',
      height:'100%',
      borderWidth:2, 
      borderColor:'black'
    }
  });

export default MainQuestion3;