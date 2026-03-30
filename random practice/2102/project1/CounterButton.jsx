import React, { useState } from 'react'

const Counter = () => {
    const[number,setNumber] = useState(0);
    function increaseValue(){
        setNumber(prev=>prev+1);
    }
    function decreaseValue(){
        setNumber(prev=>prev-1);
    }
  return (
    <div>
        <h1>{number}</h1>
      <button onClick={increaseValue}>+</button>
      <button onClick={decreaseValue}>-</button>
    </div>
  )
}

export default Counter
