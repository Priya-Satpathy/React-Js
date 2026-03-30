import React, { useState } from 'react'
import BackGroundColor from '../BackGroundColor/BackGroundColor'

const ModeTheme = () => {
    const[dark,setDark] = useState('false')

     function toggle() {
    if (dark === true) {
      setDark(false);
    } else {
      setDark(true);
    }
  }
   
  return (
    <div  style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "200px"
      }}>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ModeTheme
