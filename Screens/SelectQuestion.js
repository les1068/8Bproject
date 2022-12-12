import React, { useState } from 'react'
import { StyleSheet, View, Button, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper'

const SelectQuestion =({route,navigation})=>{
   const {Name} = route.params;
//    const {complete1} = route.params;
//    const {complete2} = route.params;
//    const {complete3} = route.params;
//    const {complete4} = route.params;
//    const {complete5} = route.params;
//    const {complete6} = route.params;
//    const {complete7} = route.params;
//    const {complete8} = route.params;
   //const [isDisabled, setIsDisabled] = useState(false);
      
    return(
        <View style={styles.container}>
            <View style={styles.listbox}>
             <View style={styles.title}>
                <TouchableOpacity onPress={()=>navigation.navigate("MainQuestion",{qNum:1,Name:Name})}>
                    question1
                    <Image source={require('C:/Users/강현호/Desktop/stdapp/assets/Question1.png')} > 
                    
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
            <Button 
            title='question2'
            // disabled={complete2}
            onPress={()=>navigation.navigate("MainQuestion",{qNum:2,Name:Name})}/>
            </View>
            <View style={styles.title}>
            <Button 
            title='question3'
            // disabled={complete3}
            onPress={()=>navigation.navigate("MainQuestion",{qNum:3,Name:Name})}/>
            </View>
            <View style={styles.title}>
            <Button 
            title='question4'
            // disabled={complete4}
            onPress={()=>navigation.navigate("MainQuestion",{qNum:4,Name:Name})}/>
            </View>
            <View style={styles.title}>
            <Button 
            title='question5'
            // disabled={complete5}
            onPress={()=>navigation.navigate("MainQuestion",{qNum:5,Name:Name})}/>
            </View>
            <View style={styles.title}>
            <Button 
            title='question6'
            // disabled={complete6}
            onPress={()=>navigation.navigate("MainQuestion",{qNum:6,Name:Name})}/>
            </View>
            <View style={styles.title}>
            <Button 
            title='question7'
            // disabled={complete7}
            onPress={()=>navigation.navigate("MainQuestion",{qNum:7,Name:Name})}/>
            </View>
            <View style={styles.title}>
            <Button 
            title='question8'
            // disabled={complete8}
            onPress={()=>navigation.navigate("MainQuestion",{qNum:8,Name:Name})}/>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#9999ff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
    },
    listbox:{ //Question이 들어있는 Box
        backgroundColor:'#fff',
        borderRadius: 15,
        borderWidth:2,
        borderColor:'#5614B0',
        borderStyle:'solid',
        marginBottom:15,
        width:120,
        alignItems: 'center',
        flexDirection:'column',
      },
    title: {
        marginTop:15,
        marginBottom:15,
    },
})

export default SelectQuestion;