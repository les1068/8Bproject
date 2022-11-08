import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainQuestion1 from './Screens/MainQuestion1';
import SelectStrategy1 from './Screens/SelectStrategy1';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "MainQuestion 1" component={MainQuestion1}/>
        <Stack.Screen name = "SelectStrategy1" component={SelectStrategy1}/>
      </Stack.Navigator>
    </NavigationContainer>
    //<MainQuestion1/>
  );
}
//#수정사항
//TextInput이 줄바꿈이 안됨


