import { useState } from "react";

export default function Counter(){
    const[count,setCount] = useState(0);


    function increaseValue(){
        setCount(count+1);
        console.log(count);
        if(count == 10){
            setCount(0);
        }
    }
    function decreaseValue(){
        setCount(count-1);
        console.log(count);
        if(count == -10){
            setCount(0);
        }

    }
   

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseValue}>+</button>
            <button onClick={ decreaseValue}>-</button>
        </div>
    )
}
