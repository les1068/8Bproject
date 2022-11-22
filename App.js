import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './Screens/StartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Dashboard from './Screens/Dashboard';
import ResetPasswordScreen from './Screens/ResetPasswordScreen';
import MainQuestion1 from './Screens/MainQuestion1';
import SelectStrategy1 from './Screens/SelectStrategy1';
//import Database from './Database';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName = 'StartScreen'
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
        <Stack.Screen name = "MainQuestion 1" component={MainQuestion1}/>
        <Stack.Screen name = "SelectStrategy1" component={SelectStrategy1}/>
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//#수정사항
//TextInput이 줄바꿈이 안됨 → 해결


