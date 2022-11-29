import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
const Question3_3_1 = (props) =>{
    return(
        <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `Jennifer has 84.5 yards of fabric to make curtains. She makes 6 identical curtains and has 19.7 
          yards of fabric remaining. How many yards of fabric does Jennifer use per curtain?`
          }</Text> 
      </View>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `step 1`
          }</Text> 
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>
        The shorter rectangles are the curtains. The longer one is the left over fabric. How long is the longer rectangle?</Text>
        <TextInput style={styles.input} multiline={true}/>
        <TouchableOpacity onPress={()=>{
        props.navigation.navigate("Question3_3_2")
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
  
  export default Question3_3_1;