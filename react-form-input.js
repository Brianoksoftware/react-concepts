import React from "react";
import styles from "./styles.css";
import { useState, useEffect } from "react";

function App() {
  const [fruit, setFruit] = useState("Apple");
  const [input, setInput] = useState('');

  const handleSubmit = (event_obj) => {
    event_obj.preventDefault();
    //setInput(input);
    console.log("Input value:", fruit);
    setFruit(input);
  }

  return (
    <div className="App">
      <h1 className="frui_t">{fruit}</h1>
      <button onClick = {() => {setFruit("Papaya")}}> Change fruit</button>

      <div>
        <form onSubmit = {handleSubmit}>
          <label className="labe_l">Enter new fruit:</label>
          <input type="text" 
          value ={input} 
          onChange = {(event_obj) => {setInput(event_obj.target.value)}}
          />
          <button type="submit">Submit</button>
        </form>
    </div>
  </div>
  );
}

export default App;


//Example 2
import React, {useState, useEffect} from 'react';
import styles from './styles.css';

function App(){
  const[counter, setCounter] = useState(0);
  const[input, setInput] = useState("");

  useEffect(() => {
    console.log("input:", input);

    return () => {
      console.log("I'm a cleanup function");
    }
    
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(input);
    //console.log("input:", input);
  }
  return(
    <div className="App">
      <h1 className="first-h1">{input}</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter fruit &nbsp;</label>
        <input type ="text" value ={input} onChange={(e) => {setInput(e.target.value)}} /> <br /> <br />
        <button type="submit">submit</button>
      </form>
    </div>
  )

}

export default App;
