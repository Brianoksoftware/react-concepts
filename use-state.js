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
