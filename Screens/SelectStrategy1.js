import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SelectStrategy1 = () =>{
    return(
        <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{
          `"Todd orders pictures from a photographer. Each picture costs $7.50.
          A one-time shipping fee of $3.25 is added to the cost of the order.
          The total cost of Todd’s order before tax is $85.75.
          How many pictures did Todd order?"`
          }</Text> 
      </View>

      <View style={styles.inputView}>
          <Text style={{fontWeight:"bold"}}>Which strategy do you want to try?</Text>

          <View style={{padding:15}}>
          <Button color='#6666ff' title='Write an equation to solve the problem' />
          </View>

          <View style={{padding:15}}>
          <Button color='#6666ff' title='Add on the shipping fee until I get to $85,75.'/>
          </View>

          <View style={{padding:15}}>
          <Button color='#6666ff' title='Subtract away from $85,75 until I get to O.'/>
          </View>
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
      height:'35%',
      backgroundColor:'#fff',
      paddingVertical:25, //상,하
      paddingHorizontal:20, //좌,우
      borderWidth:2, 
      borderStyle:'solid', 
      borderColor:'#5614B0',
      borderRadius:20
    },
    btn:{ //Button
      textAlign:'center',
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius: 10,
      backgroundColor:'#6666ff'
    },
  });
  
  export default SelectStrategy1;