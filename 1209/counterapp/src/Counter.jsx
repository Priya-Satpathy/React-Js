import { useState } from "react"

export default function Counter(){

    const[count,setCount] = useState(1);

    function  increaseValue(){
        // count = count+1;
        setCount(count+1);
    }
      function  decreaseValue(){
        // count = count+1;
        setCount(count-1);
    }
   
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
        </>
    )
}