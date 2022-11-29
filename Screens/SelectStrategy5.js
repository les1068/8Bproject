import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'

const SelectStrategy5 = (props) =>{
    return(
        <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `Mario is setting up a new tent during a camping trip. The tent came with 7 feet of rope. The instructions are to use 34.5 inches of the rope to tie 
          a tarp on top of the tent. Then, the remaining rope should be cut into 8¼-inch sections to tie the tent to stakes in the ground. Mario will use all o
          f the rope as instructed. Write and solve an equation to determine the number of 8¼-inch sections of rope Mario can cut from the rope.`
          }</Text> 
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>Which strategy do you want to try?</Text>
        <TouchableOpacity
         onPress={()=>{
        props.navigation.navigate("Question5_1_1") //
        }}>
            <Text style={styles.btn}>Write equations to solve the problem</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          props.navigation.navigate("Question5_2_1") //
          }}>
            <Text style={styles.btn}>Add on from 34.5 inches until I use up all the rope</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          props.navigation.navigate("Question5_3_1") //
          }}>
            <Text style={styles.btn}>Subtract from the total until I get to 0</Text>
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
  
  export default SelectStrategy5;