// import "./ColorChange.css"
import { useState } from "react"

export default function ColorChange(){
    const[color,setColor] = useState("White");

    function changeRed(){
        setColor("Red");
    }
    
    function changeBlue(){
        setColor("Blue");
    }
    
    function changeGreen(){
        setColor("Green");
    }
    return(
        <div className="ColorChange" style={{ backgroundColor: color, padding: "10px",width:"150px",height:"150px",border:"2px solid black" }}>
            <h1>{color}</h1>
            <button  onClick={changeRed}>Red</button>
            <button onClick={changeBlue}>Blue</button>
            <button onClick={changeGreen}>Green</button>
        </div>
    )
}