//Example 1...using useState hook
import React from 'react';
import {useState} from 'react';

export function App(props) {
  const [fruit, setFruit] = useState("Mangoe");

  const fruitChanger = () => {
    setFruit("Banana");
    console.log(fruit)
  }
  return (
    <div className='App'>
      <h1><u>Using useState</u></h1>
        <h2>{fruit}</h2>
        <button onClick={fruitChanger}> + </button>
    </div>
  );
}


//Example 2
import React from 'react';
import {useState} from 'react';

export default function App(props) {
  const [fruit, setFruit] = useState("Mangoes");
  const [fruit_adder, setFruitAdder] = useState(0);
  
  const fruitChanger = () => {
    setFruit("Bananas");
    console.log(fruit)
  }

  const fruitAdder = () => {
    setFruitAdder(fruit_adder + 1 )
  }

  function fruitRemover(){
    setFruitAdder(fruit_adder - 1);
  }
  return (
    <div className='App'>
      <h1><u>Using useState</u></h1>
        <h2>I had {fruit_adder} {fruit} yesterday.</h2>
        <button onClick = {fruitAdder}> add fruit</button>
        <button onClick={fruitChanger}> Change fruit </button>
        <button onClick={fruitRemover}> remove fruit </button>
    </div>
  );
} 


//Example 2 rewritten

import React from "react";
import { useState } from "react";

export default function App(props) {
  const [fruit, setFruit] = useState("Mangoes");
  const [fruit_adder, setFruitAdder] = useState(0);

  /*
  const fruitChanger = () => {
    setFruit("Bananas");
    console.log(fruit);
  };
*/

/*
  const fruitAdder = () => {
    setFruitAdder(fruit_adder + 1);
  };
*/
  
  function fruitRemover() {
    if (fruit_adder >= 1 ){ //No negatives
      setFruitAdder(fruit_adder - 1);
    }
    else{
      setFruitAdder(0);
    }
  }
  return (
    <div className="App">
      <h1>
        <u>Using useState</u>
      </h1>
      <h2>
        I had {fruit_adder} {fruit} yesterday.
      </h2>
      <button onClick={() => setFruitAdder(fruit_adder + 1)}> add fruit</button>
      <button onClick={() => setFruit("Avocadoes")}> Change fruit </button>
      <button onClick={fruitRemover}> remove fruit </button>
    </div>
  );
}

