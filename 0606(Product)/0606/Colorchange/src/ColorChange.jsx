import { useState } from "react"

export default function ColorChange(){
    const[color,setColor] = useState("pink");
    
    // function backgroundRed(){
    //     setColor("red");
    // }
    // function backgroundGreen(){
    //     setColor("green");
    // }
    // function backgroundYellow(){
    //     setColor("yellow");
    // }

    function backgroundChange(str){
        setColor(str);
    }
    return (
        <div>
        
        <div style = {{border: "1px solid red", width: "500px", height: "500px",backgroundColor: color }}>  </div>
            <button onClick={()=>{backgroundChange("red")}}>Red</button>
            <button onClick={()=>{backgroundChange("green")}}>Green</button>
            <button onClick={()=>{backgroundChange("yellow")}}>Yellow</button>
        </div>
        
    )
}