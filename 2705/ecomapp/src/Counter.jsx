import { useState } from "react"

    export default function Counter(){
   let[count,setCount] = useState(1);
    
    function incrementValue(){
        // count = count+1;
        // console.log(count);
        setCount(count+1);
         console.log(count);
    }
    function decrementValue(){
        setCount(count-1);
        console.log(count);
    }
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={incrementValue}>+</button>
        <button onClick={decrementValue}>-</button>
    </div>
    );
}