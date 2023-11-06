//useEffect

import React from "react";
import styles from "./styles.css";
import { useState, useEffect } from "react";

function App() {
  const [fruit, setFruit] = useState("Apple");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //console.log("Fruit is",fruit);
    console.log("Counter is", counter);

    return(
      console.log("Cleanup function.")
    )
  }, [counter]);

  const minusCounter = () => { 
    if (counter >= 1){ //no negative numbers
      setCounter(counter - 1);
    }
    else{
      setCounter(0);
    }
  }

  return (
    <>
      <h1> I have {counter} {fruit}s.</h1>
      <button onClick={minusCounter}>-</button>
      <button onClick={() => {setFruit("Pineapple")}}> Change fruit </button>
      <button onClick={() => {setCounter(counter + 1)}}>+</button>
    </>
  );
}

export default App;

