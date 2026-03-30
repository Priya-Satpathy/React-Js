
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    function increaseValue() {
        const Count = count + 1;
        setCount(Count);
        console.log(Count);

        if (Count >= 10 && Count <= 15){
            setColor("green");
        }
         else if (Count > 15)
        {
            setColor("red");
        } 
        else {
            setColor(""); 
        }
    }

    function decreaseValue() {
        const Count = count - 1;
        setCount(Count);
        console.log(Count);

        if (Count <= -5 && Count >= -10 )  {
            setColor("green");
        } 
        else if (Count < -10) 
        {
            setColor("red");
        } 
        else {
            setColor(""); 
        }
    }

    return (
        <div>   
            <h1 style={{backgroundColor:color}}>{count}</h1>
            <button onClick={increaseValue}>+</button>
            <button onClick={decreaseValue}>-</button>
        </div>
    );
}

