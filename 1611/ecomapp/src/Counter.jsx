import { useState } from "react"

export default function Counter(){
    let[count,setCount] = useState(0);
    let[color,setColor] = useState("");
  
    function increaseValue(){
        setCount(count+1);
        console.log(count);

        if (count >= 10 && count <= 15){
            setColor("green");
        }
         else if (count > 15)
        {
            setColor("red");
        } 
        else {
            setColor(""); 
        }
    }
    function decreaseValue(){
        setCount(count-1);
         console.log(count);
      
         if (count <= -5 && count >= -10 )  {
            setColor("green");
        } 
        else if (count < -10) 
        {
            setColor("yellow");
        } 
        else {
            setColor(""); 
        }
    }
    return(
        <>
        <h1 style={{backgroundColor:color}}>{count}</h1>
        <button onClick={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
        </>
    )
}
