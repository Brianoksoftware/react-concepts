{/*Parent & child components, props, state, array destructuring*/}
import React, {useState} from 'react';
import {Text, TextLine, Image, View, Button} from 'react-native';

const Car = ({year, model}) => {
  const[isReceived, setIsreceived] = useState(true);
  const[isExited, setIsexited] = useState(false);
  {/*const model = "VW GOLF";*/}
  {/*const year = 2015;*/}
	return(
	  <>
		<View>
		      <Text>MODEL: {year} {model} </Text>
			    <Text>CAR ENTRY</Text>
    			<Button onPress={() => setIsreceived(false)}   title={isReceived ? 'Add car' : "Car Added"} disabled = {!isReceived} /> 
    </View>
		
		<View>
		  <Text>CAR EXIT</Text>
		  <Button onPress={() => setIsexited(true)} title={isExited ? "Car removed":"Car present"} disabled={isExited}/>
		</View>
	</>
	);
}

const Cargarage = () => {
	return(
	  <View>
	    <Car year="2015" model="VW GOLF TSI"/> <br/> <br/> <br/>
	    <Car year="2016" model="VW GOLF MK7"/>
	  </View>
	);
}

export default Cargarage;











































































