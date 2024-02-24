{/*Handling text input*/}
import React, {useState}  from 'react';
import {View, TextInput, Text} from 'react-native';

const Translator = () => {

  return(
    <View style={{padding:10}}>
      <TextInput style={{height:40}} placeholder="Type text to translate" />
    </View>
  );
}
export default Translator; 
