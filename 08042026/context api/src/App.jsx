import React, { createContext } from 'react'
import CheckOut from './CheckOut'

export let UserContext = createContext()
const App = () => {
  return (
    <div>
      <UserContext.Provider value="Pglu">
        <CheckOut />
      </UserContext.Provider>
    </div>
  )
}

export default App
