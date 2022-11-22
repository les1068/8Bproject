import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "MainQuestion 1" component={MainQuestion1}/>
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
       

      </Stack.Navigator>
    </NavigationContainer>
    //<MainQuestion1/>
  );
}
//#수정사항
//TextInput이 줄바꿈이 안됨


