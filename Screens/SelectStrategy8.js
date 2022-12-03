import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
const SelectStrategy8 = ({route,navigation}) =>{
  const {nickname} = route.params;
  const solved1 = route.params.solved1;
  const solved2 = route.params.solved2;
  return(
      <View style={styles.container}>
    <StatusBar backgroundColor='black'/>
    <View style={styles.questionBox}>
      <Text style={{fontWeight:"bold"}}>{
        `Owen is designing a rectangular garden whose length is 25 feet. He needs to put fencing all around the exterior of the garden and wants to use 
        less than 80 feet of fencing. How wide could the garden be?`
        }</Text> 
    </View>
    <View style={styles.inputView}>
      <Text style={{fontWeight:"bold"}}>Which strategy do you want to try?</Text>
      <TouchableOpacity
       onPress={()=>{
      navigation.navigate("Question8_1_1",{nickname:nickname}) //
      }}
      disabled={solved1}>
          <Text style={styles.btn}>Guess and check</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate("Question8_2_1",{nickname:nickname}) //
        }}
        disabled={solved2}>
          <Text style={styles.btn}>Write an inequality to solve the problem</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate("Question8_3_1",{nickname:nickname}) //
        }}>
          <Text style={styles.btn}>Add up until I figure out the width of the garden.</Text>
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
  
  export default SelectStrategy8;