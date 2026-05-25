import React, { useContext } from 'react'
import { UserContext } from './App'

const CheckOut = () => {
    let value = useContext(UserContext)
  return (
    <div>
      <h1>Hello{value}  1qazsw2333</h1>
    </div>
  )
}

export default CheckOut
