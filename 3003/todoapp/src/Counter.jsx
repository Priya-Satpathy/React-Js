import React, { useState } from 'react'

const Counter = () => {
    let[count,setCount] = useState(1)
    
    function incrementValue(){
        count++;
        setCount(count);
        
    }
      function decrementValue(){
        count--;
        setCount(count);
        
    }
  return (
    
    <div>
        <h1>{count}</h1>
      <button onClick={incrementValue}>+</button>
      <button onClick={decrementValue}>-</button>
    </div>
  )
}

export default Counter
