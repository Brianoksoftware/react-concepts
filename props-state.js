{/*React props and state*/}
import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

const Cat = ({name}) => {
  const[isHungry, setIsHungry] = useState(true);
  return(
    <View>
      <Text>
        I am {name} and i'm {isHungry ? 'Hungry' : 'Full'}!
      </Text>
      <Button onPress={() => setIsHungry(false)} disabled={!isHungry} title={isHungry ? 'Pour me some milk.' : 'Thanks!'}/>
    </View>
  );  
}

const Cafe = () => {
  return(
    <View>
      <Cat name="Avocato"/>
      <Cat name="Lilcato"/>
    </View>
  );
}

export default Cafe;
