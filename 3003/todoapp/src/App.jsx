import React from 'react'
import Greetings from './Greetings'
import Address from './Address'
import Counter from './Counter'
import ColorChange from './ColorChange'

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      
      {/* <Address name = "Priya Satpathy" city = "Sambalpur" age = "20" state = "Odisha" pin = {768003} />
      <Address name = "Prachismita Pandaa" city = "Sambalpur" age = "21" state = "Odisha" pin = {768913} /> */}
      <ColorChange />

    </div>
  )
}



export default App
