import React, { useState } from 'react'

const EvenOdd = () => {
    const[number, setNumber] = useState(0)
    
    function increase(){
        setNumber(number+1);
    }
    function reSet(){
      setNumber(0);
    }
  return (
    <div>
        <h2>{number}</h2>
      <h3>{number%2===0?"Even":"Odd"}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={reSet}>Reset</button>
    </div>
  )
}

export default EvenOdd
