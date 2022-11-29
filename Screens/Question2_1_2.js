import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
const Question2_1_2 = (props) =>{
    return(
        <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `Jen wants to run a total of 22 miles in five days. 
          The table shows her log for the miles she ran on Monday, Tuesday, Wednesday, and Thursday. 
          How many miles must Jen run on Friday to reach her goal?`
          }</Text> 
      </View>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `step 2`
          }</Text> 
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>
        OK, if she ran 16 1/8 miles, how many more does she have to run to reach 22 miles?</Text>
        <TextInput style={styles.input} multiline={true}/>
        <TouchableOpacity onPress={()=>{
        props.navigation.navigate("SelectStrategy2")
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
  
  export default Question2_1_2;