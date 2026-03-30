import React from 'react'

const Address = ({name,age,city,state,pin}) => {

  return (
     <div>
        <h1>Name - {name}</h1>
       
        <h3>Age - {age}</h3>
        <h3>City - {city}</h3>
        <h3>State - {state}</h3>
        <h3>Pin - {pin}</h3>
        
    </div>
  )
}

export default Address
