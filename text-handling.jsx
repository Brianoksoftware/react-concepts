import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

const Translatorapp = () => {
  const[text, setText] = useState('');
  return(
    <View style={{padding:10}}>
    
      <TextInput style={{height:40}} placeholder="Type text to translate" defaultValue={text} onChangeText={(newtext) => setText(newtext)}>
      </TextInput>
      
      <Text style={{padding:10, fontSize:42}}>
        {text.split(' ').map(word => word && ':)').join(' ')}
      </Text>
      
    </View>
  )
};
export default Translatorapp;

//Example 2
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Tranzlator = () => {
  const[text, setText] = useState('');
  return(
    <View style={{padding:10}}>
      <TextInput style={{height:40}} placeholder="Enter text to translate" onChangeText={(newtext)=>setText(newtext)}>
      </TextInput>
      <Text style={{fontSize:30, padding:10}}>
        {text.split(' ').map(word => word && ':)').join(' ')}
      </Text>
    </View>
  )
}
export default Tranzlator;
