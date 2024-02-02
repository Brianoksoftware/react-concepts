import React from "react";
import {Text, TextInput, View} from "react-native";

const Hey = () => {
  return(
      <View>
        <Text>Howdy</Text>
      </View>
    )
};

const Greeter = () => {
  return(
  <>
    <Hey/>
    <Hey/>
    <Hey/>
    <Hey/>
  </>
  );
};
export default Greeter;
