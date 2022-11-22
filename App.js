import React, { useState } from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'
import {db} from './firebaseConfig';
import {addDoc, collection} from './firebaseConfig';
import TextInput from './src/components/TextInput'
import Button from './src/components/Button'
const Stack = createStackNavigator()

export default function App() {
  const [addID, setAddID] = useState('');
  const [addPW, setAddPW] = useState('');
  const addtoDB = async () =>{
    try{
      await addDoc(collection(db, "user"),{
        addID : addID,
        addPW : addPW,
        createdAt : new Date(),
      });
    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <View>
      <TextInput
        placeholder="ID"
        value={addID}
        onChangeText={setAddID}/>
        <TextInput
        placeholder="PW"
        value={addPW}
        onChangeText={setAddPW}/>
        <Button onPress={addtoDB}/>
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </View>
  )
}
