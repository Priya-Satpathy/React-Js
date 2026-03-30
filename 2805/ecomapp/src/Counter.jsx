import { useState } from "react";

export default function Counter(){
    const[count,setCount] = useState(0);

    function increaseValue(){
        setCount(count+1);
        console.log(count);
    }
    function decreaseValue(){
        setCount(count+1);
        console.log(count);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ ()=>setCount(count+1)}>+</button>
            <button onClick={ ()=>setCount(count-1)}>-</button>
        </div>
    )
}
