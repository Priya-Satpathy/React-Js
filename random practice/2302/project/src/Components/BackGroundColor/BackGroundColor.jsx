import React, { useState } from 'react'

const BackGroundColor = () => {
    const[color,setColor] = useState('white');
    function changeColor() {

    const randomColor =
      "rgb(" +
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + ")";

    setColor(randomColor);
  }
  return (
    <div style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <button onClick={changeColor}>BackGroundColor</button>
    </div>
  )
}

export default BackGroundColor
