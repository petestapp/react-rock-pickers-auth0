import React from 'react';
import {useState} from "react";

function RockCounter() {
  // const[name, setName] = useState(null);
  const[rocks, setRocks] = useState(0);

  const increaseCount = ()=>{
    console.log('in increaseCount');
    setRocks(rocks + 1);
  }
  const decreaseCount = ()=>{
    console.log('in decreaseCount');
    setRocks(rocks - 1);
  }
  const resetCount = ()=>{
    console.log('in resetCount');
  }
  return (
    <div>
      <div>Rocks Picked: {rocks}</div>
      <div>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default RockCounter;
