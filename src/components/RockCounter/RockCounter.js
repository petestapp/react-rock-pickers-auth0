import React from 'react';
import {useState} from "react";

function RockCounter() {
  const increaseCount = ()=>{
    console.log('in increaseCount');
  }
  const decreaseCount = ()=>{
    console.log('in decreaseCount');
  }
  const resetCount = ()=>{
    console.log('in resetCount');
  }
  return (
    <div>
      <div>Rocks Picked: 0</div>
      <div>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default RockCounter;
