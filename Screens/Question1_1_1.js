import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import * as DBfunction from '../Database'

const Question1_1_1 = ({route,count,navigation}) =>{
  const [answer,setAnswer] = useState('')
  const {nickname} = route.params;
  const qid = "sub_question1_1_1"

    return(
        <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `Todd orders pictures from a photographer. Each picture costs $7.50.
          A one-time shipping fee of $3.25 is added to the cost of the order.
          The total cost of Todd’s order before tax is $85.75.
          How many pictures did Todd order?`
          }</Text> 
      </View>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `step 1`
          }</Text> 
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>
            OK. Using p to represent the number of pictures, 
            write an equation that represents how p, 
            $7.50 per picture, and the $3.25 shipping fee combine to make $85.75</Text>
        <TextInput style={styles.input} multiline={true} value={answer} onChangeText={setAnswer}/>
        <TouchableOpacity onPress={()=>{
        DBfunction.updateDB(nickname,qid,answer)
        navigation.navigate("Question1_1_2",{nickname:nickname})
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
  
  export default Question1_1_1;