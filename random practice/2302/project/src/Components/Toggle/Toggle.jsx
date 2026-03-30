import React, { useState } from 'react'

const Toggle = () => {
  const[color,setColor] = useState('');

 function changeColor() {
  if (color === "Blue") {
    setColor("Red");
  } else {
    setColor("Blue");
  }
}
  return (
     <div style={{ backgroundColor: color, height: "20vh", textAlign: "center", paddingTop: "30px", border: "1px solid  black", width : "50%" }}>
      <h1 style={{ color: "white" }}>{color}</h1>
      <button onClick={changeColor} style={{ padding: "10px 20px" }}>Toggle</button>
    </div>
  )
}

export default Toggle
    