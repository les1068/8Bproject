import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { updateDB } from '../Database';
const Question4_1_4 = ({route,navigation}) =>{
  const [answer,setAnswer] = useState('')
  const {nickname} = route.params;
  const qid = "sub_question4_1_4"
  const solved = true;
    return(
        <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `Elena, Karla, and Faye are playing a card game where they score points. Karla scores twice the number of points Elena does, 
          and Faye scores 30 points more than Elena does. The sum of their three scores is 114. Who scores more points, Karla or Faye?`
          }</Text> 
      </View>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `step 4`
          }</Text> 
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>
        Nice work! The points for Elena, Karla, and Faye add up to 114, so that seems correct! So who scored the most?</Text>
        <TextInput style={styles.input} multiline={true}  value={answer} onChangeText={setAnswer}/>
        <TouchableOpacity onPress={()=>{
        updateDB(nickname,qid,answer)  
        navigation.navigate("SelectStrategy4",{nickname:nickname,solved1:solved})
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
      width:350,
      height:150,
      borderWidth:2, 
      borderColor:'black'
    }
  });
  
  export default Question4_1_4;