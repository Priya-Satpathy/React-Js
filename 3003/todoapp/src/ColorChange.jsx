import React, { useState } from 'react'

const ColorChange = () => {
    const[color,setColor] = useState("pink")
    

  return (
    <div>
        <div style={{border:"1px solid red", width: "500px", height:"500px",backgroundColor:color}}></div>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
      
    </div>
  )
}

export default ColorChange
