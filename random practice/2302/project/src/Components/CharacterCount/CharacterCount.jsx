import React, { useState } from 'react'

const CharacterCount = () => {
    const[count,setCount] = useState('')
    function handleChange(e){
        setCount(e.target.value)
    }
  return (
    <div>
      <input type="text" value={count} onChange={handleChange} />
      <p>Character Count :{count.length}</p>
    </div>
  )
}

export default CharacterCount
