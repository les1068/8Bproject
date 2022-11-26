import React from 'react'
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

import MainQuestion1 from './Screens/MainQuestion1';
import SelectStrategy1 from './Screens/SelectStrategy1';
import Question1_1_1 from './Screens/Question1_1_1'
import Question1_1_2 from './Screens/Question1_1_2'
import Question1_2_1 from './Screens/Question1_2_1'
import Question1_3_1 from './Screens/Question1_3_1'

import MainQuestion2 from './Screens/MainQuestion2';
import SelectStrategy2 from './Screens/SelectStrategy2';
import Question2_1_1 from './Screens/Question2_1_1'
import Question2_1_2 from './Screens/Question2_1_2'
import Question2_2_1 from './Screens/Question2_2_1'
import Question2_2_2 from './Screens/Question2_2_2'
import Question2_3_1 from './Screens/Question2_3_1'

import MainQuestion3 from './Screens/MainQuestion3';
import SelectStrategy3 from './Screens/SelectStrategy3';
import Question3_1_1 from './Screens/Question3_1_1'
import Question3_1_2 from './Screens/Question3_1_2'
import Question3_2_1 from './Screens/Question3_2_1'
import Question3_2_2 from './Screens/Question3_2_2'
import Question3_3_1 from './Screens/Question3_3_1'
import Question3_3_2 from './Screens/Question3_3_2'
import Question3_3_3 from './Screens/Question3_3_3'

import MainQuestion4 from './Screens/MainQuestion4';
import SelectStrategy4 from './Screens/SelectStrategy4';
import Question4_1_1 from './Screens/Question4_1_1'
import Question4_1_2 from './Screens/Question4_1_2'
import Question4_1_3 from './Screens/Question4_1_3'
import Question4_1_4 from './Screens/Question4_1_4'
import Question4_2_1 from './Screens/Question4_2_1'
import Question4_2_2 from './Screens/Question4_2_2'
import Question4_2_3 from './Screens/Question4_2_3'
import Question4_2_4 from './Screens/Question4_2_4'
import Question4_3_1 from './Screens/Question4_3_1'
import Question4_3_2 from './Screens/Question4_3_2'
import Question4_3_3 from './Screens/Question4_3_3'
import Question4_3_4 from './Screens/Question4_3_4'

import MainQuestion5 from './Screens/MainQuestion5';
import SelectStrategy5 from './Screens/SelectStrategy5';
import Question5_1_1 from './Screens/Question5_1_1'
import Question5_1_2 from './Screens/Question5_1_2'
import Question5_2_1 from './Screens/Question5_2_1'
import Question5_2_2 from './Screens/Question5_2_2'
import Question5_3_1 from './Screens/Question5_3_1'
import Question5_3_2 from './Screens/Question5_3_2'

import MainQuestion6 from './Screens/MainQuestion6';
import SelectStrategy6 from './Screens/SelectStrategy6';
import Question6_1_1 from './Screens/Question6_1_1'
import Question6_1_2 from './Screens/Question6_1_2'
import Question6_2_1 from './Screens/Question6_2_1'
import Question6_2_2 from './Screens/Question6_2_2'
import Question6_2_3 from './Screens/Question6_2_3'
import Question6_2_4 from './Screens/Question6_2_4'
import Question6_3_1 from './Screens/Question6_3_1'
import Question6_3_2 from './Screens/Question6_3_2'

import MainQuestion7 from './Screens/MainQuestion7';
import SelectStrategy7 from './Screens/SelectStrategy7';
import Question7_1_1 from './Screens/Question7_1_1'
import Question7_1_2 from './Screens/Question7_1_2'
import Question7_1_3 from './Screens/Question7_1_3'
import Question7_2_1 from './Screens/Question7_2_1'
import Question7_2_2 from './Screens/Question7_2_2'
import Question7_2_3 from './Screens/Question7_2_3'
import Question7_3_1 from './Screens/Question7_3_1'
import Question7_3_2 from './Screens/Question7_3_2'

import MainQuestion8 from './Screens/MainQuestion8';
import SelectStrategy8 from './Screens/SelectStrategy8';
import Question8_1_1 from './Screens/Question8_1_1'
import Question8_1_2 from './Screens/Question8_1_2'
import Question8_1_3 from './Screens/Question8_1_4'
import Question8_1_4 from './Screens/Question8_1_4'
import Question8_2_1 from './Screens/Question8_2_1'
import Question8_2_2 from './Screens/Question8_2_2'
import Question8_2_3 from './Screens/Question8_2_3'
import Question8_3_1 from './Screens/Question8_3_1'
import Question8_3_2 from './Screens/Question8_3_2'
import Question8_3_3 from './Screens/Question8_2_3'
import MainScreen from './Screens/MainScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
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
          <Stack.Screen name = "MainScreen" component={MainScreen}/>
        <Stack.Screen name = "MainQuestion1" component={MainQuestion1}/>
        <Stack.Screen name = "SelectStrategy1" component={SelectStrategy1}/>
        <Stack.Screen name = "Question1_1_1" component={Question1_1_1}/>
        <Stack.Screen name = "Question1_1_2" component={Question1_1_2}/>
        <Stack.Screen name = "Question1_2_1" component={Question1_2_1}/>
        <Stack.Screen name = "Question1_3_1" component={Question1_3_1}/>

        <Stack.Screen name = "MainQuestion2" component={MainQuestion2}/>
        <Stack.Screen name = "SelectStrategy2" component={SelectStrategy2}/>
        <Stack.Screen name = "Question2_1_1" component={Question2_1_1}/>
        <Stack.Screen name = "Question2_1_2" component={Question2_1_2}/>
        <Stack.Screen name = "Question2_2_1" component={Question2_2_1}/>
        <Stack.Screen name = "Question2_2_2" component={Question2_2_2}/>
        <Stack.Screen name = "Question2_3_1" component={Question2_3_1}/>

        <Stack.Screen name = "MainQuestion3" component={MainQuestion3}/>
        <Stack.Screen name = "SelectStrategy3" component={SelectStrategy3}/>
        <Stack.Screen name = "Question3_1_1" component={Question3_1_1}/>
        <Stack.Screen name = "Question3_1_2" component={Question3_1_2}/>
        <Stack.Screen name = "Question3_2_1" component={Question3_2_1}/>
        <Stack.Screen name = "Question3_2_2" component={Question3_2_2}/>
        <Stack.Screen name = "Question3_3_1" component={Question3_3_1}/>
        <Stack.Screen name = "Question3_3_2" component={Question3_3_2}/>
        <Stack.Screen name = "Question3_3_3" component={Question3_3_3}/>

        <Stack.Screen name = "MainQuestion4" component={MainQuestion4}/>
        <Stack.Screen name = "SelectStrategy4" component={SelectStrategy4}/>
        <Stack.Screen name = "Question4_1_1" component={Question4_1_1}/>
        <Stack.Screen name = "Question4_1_2" component={Question4_1_2}/>
        <Stack.Screen name = "Question4_1_3" component={Question4_1_3}/>
        <Stack.Screen name = "Question4_1_4" component={Question4_1_4}/>
        <Stack.Screen name = "Question4_2_1" component={Question4_2_1}/>
        <Stack.Screen name = "Question4_2_2" component={Question4_2_2}/>
        <Stack.Screen name = "Question4_2_3" component={Question4_2_3}/>
        <Stack.Screen name = "Question4_2_4" component={Question4_2_4}/>
        <Stack.Screen name = "Question4_3_1" component={Question4_3_1}/>
        <Stack.Screen name = "Question4_3_2" component={Question4_3_2}/>
        <Stack.Screen name = "Question4_3_3" component={Question4_3_3}/>
        <Stack.Screen name = "Question4_3_4" component={Question4_3_4}/>

        <Stack.Screen name = "MainQuestion5" component={MainQuestion5}/>
        <Stack.Screen name = "SelectStrategy5" component={SelectStrategy5}/>
        <Stack.Screen name = "Question5_1_1" component={Question5_1_1}/>
        <Stack.Screen name = "Question5_1_2" component={Question5_1_2}/>
        <Stack.Screen name = "Question5_2_1" component={Question5_2_1}/>
        <Stack.Screen name = "Question5_2_2" component={Question5_2_2}/>
        <Stack.Screen name = "Question5_3_1" component={Question5_3_1}/>
        <Stack.Screen name = "Question5_3_2" component={Question5_3_2}/>

        <Stack.Screen name = "MainQuestion6" component={MainQuestion6}/>
        <Stack.Screen name = "SelectStrategy6" component={SelectStrategy6}/>
        <Stack.Screen name = "Question6_1_1" component={Question6_1_1}/>
        <Stack.Screen name = "Question6_1_2" component={Question6_1_2}/>
        <Stack.Screen name = "Question6_2_1" component={Question6_2_1}/>
        <Stack.Screen name = "Question6_2_2" component={Question6_2_2}/>
        <Stack.Screen name = "Question6_2_3" component={Question6_2_3}/>
        <Stack.Screen name = "Question6_2_4" component={Question6_2_4}/>
        <Stack.Screen name = "Question6_3_1" component={Question6_3_1}/>
        <Stack.Screen name = "Question6_3_2" component={Question6_3_2}/>

        <Stack.Screen name = "MainQuestion7" component={MainQuestion7}/>
        <Stack.Screen name = "SelectStrategy7" component={SelectStrategy7}/>
        <Stack.Screen name = "Question7_1_1" component={Question7_1_1}/>
        <Stack.Screen name = "Question7_1_2" component={Question7_1_2}/>
        <Stack.Screen name = "Question7_1_3" component={Question7_1_3}/>
        <Stack.Screen name = "Question7_2_1" component={Question7_2_1}/>
        <Stack.Screen name = "Question7_2_2" component={Question7_2_2}/>
        <Stack.Screen name = "Question7_2_3" component={Question7_2_3}/>
        <Stack.Screen name = "Question7_3_1" component={Question7_3_1}/>
        <Stack.Screen name = "Question7_3_2" component={Question7_3_2}/>

        <Stack.Screen name = "MainQuestion8" component={MainQuestion8}/>
        <Stack.Screen name = "SelectStrategy8" component={SelectStrategy8}/>
        <Stack.Screen name = "Question8_1_1" component={Question8_1_1}/>
        <Stack.Screen name = "Question8_1_2" component={Question8_1_2}/>
        <Stack.Screen name = "Question8_1_3" component={Question8_1_3}/>
        <Stack.Screen name = "Question8_1_4" component={Question8_1_4}/>
        <Stack.Screen name = "Question8_2_1" component={Question8_2_1}/>
        <Stack.Screen name = "Question8_2_2" component={Question8_2_2}/>
        <Stack.Screen name = "Question8_2_3" component={Question8_2_3}/>
        <Stack.Screen name = "Question8_3_1" component={Question8_3_1}/>
        <Stack.Screen name = "Question8_3_2" component={Question8_3_2}/>
        <Stack.Screen name = "Question8_3_3" component={Question8_3_3}/>

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
