import { useState } from "react";

export default function Counter(){
    let[count,setCount] = useState(1);

    function increaseValue(){
        setCount(count+1);
        console.log(count);
        

    }
    
    function decreaseValue(){
        setCount(count-1);
        console.log(count);

    }

return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
    </div>
)}