import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'

const SelectStrategy3 = (props) =>{
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
        <Text style={{fontWeight:"bold"}}>Which strategy do you want to try?</Text>
        <TouchableOpacity
         onPress={()=>{
        props.navigation.navigate("Question3_1_1")
        }}>
            <Text style={styles.btn}>Subtract the extra yards and then figure out how much fabric she used for each curtain</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{
          props.navigation.navigate("Question3_2_1")
          }}>
            <Text style={styles.btn}>Write an equation to solve it</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          props.navigation.navigate("Question3_3_1")
          }}>
            <Text style={styles.btn}>Use a diagram to try and understand the problem</Text>
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
  
  export default SelectStrategy3;