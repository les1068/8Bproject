import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../Components/Background'
import Logo from '../Components/Logo'
import Header from '../Components/Header'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'
import BackButton from '../Components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import * as DBfunction from '../Database.js'
import MainQuestion1 from './MainQuestion1'


export default function LoginScreen({ navigation }) {
  const [addName, setAddName] = useState('')
  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome.</Header>
      <TextInput
        label="NickName"
        value={addName}
        onChangeText={setAddName}
      />
      <Button mode="contained" onPress={() =>navigation.navigate('MainScreen')}GOT>
        Login
      </Button>
      
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
