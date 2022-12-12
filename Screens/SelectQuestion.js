import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Button } from 'react-native'
import { Text } from 'react-native-paper'

const SelectQuestion =({route,navigation})=>{
   const {Name} = route.params;
    return(
        <View style={styles.container}>
            <Button 
            title='question1'
            onPress={()=>navigation.navigate("MainQuestion",{qNum:1,Name:Name})}/>
            <Button 
            title='question2'
            onPress={()=>navigation.navigate("MainQuestion",{qNum:2,Name:Name})}/>
            <Button 
            title='question3'
            onPress={()=>navigation.navigate("MainQuestion",{qNum:3,Name:Name})}/>
            <Button 
            title='question4'
            onPress={()=>navigation.navigate("MainQuestion",{qNum:4,Name:Name})}/>
            <Button 
            title='question5'
            onPress={()=>navigation.navigate("MainQuestion",{qNum:5,Name:Name})}/>
            <Button 
            title='question6'
            onPress={()=>navigation.navigate("MainQuestion",{qNum:6,Name:Name})}/>
            <Button 
            title='question7'
            onPress={()=>navigation.navigate("MainQuestion",{qNum:7,Name:Name})}/>
            <Button 
            title='question8'
            onPress={()=>navigation.navigate("MainQuestion",{qNum:8,Name:Name})}/>
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
    }
})

export default SelectQuestion;