import React, { useState } from 'react'

const Counter = () => {
    const[number,setNumber] = useState(0);

    function reSet(){
        setNumber(0);
    }
  
  return (
    <div>
      <h1>{number}</h1>
      {/* <button onClick={increaseValue}>+</button>
      <button onClick={decreaseValue}>-</button> */}
      <button onClick={()=>setNumber(number+5)}>+</button>
      <button onClick={()=>setNumber(number-2)}>-</button>
      <button onClick={reSet}>Reset</button>
    </div>
  )
}

export default Counter
