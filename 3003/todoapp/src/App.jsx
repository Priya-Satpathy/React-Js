import React, { useState } from 'react'
import Greetings from './Greetings'
import Address from './Address'
import Counter from './Counter'
import ColorChange from './ColorChange'
import Product from './Product'

const App = () => {
  const[todo,setTodo] = useState('')
 
  function handleSubmit(e){
    e.preventDefault();
    console.log(todo);
 
    
  }
  return (
    <div>
      <h1>Hello</h1>
      
      {/* <Address name = "Priya Satpathy" city = "Sambalpur" age = "20" state = "Odisha" pin = {768003} />
      <Address name = "Prachismita Pandaa" city = "Sambalpur" age = "21" state = "Odisha" pin = {768913} /> */}
      {/* <ColorChange /> */}

{/*       
      <Product name = "Nike Air Max Bia" type = "Men's Shoes" price = "₹7,995"/>
      <Product name = "Nike Flex Runner 4" type = "Flex Runner 4 Baby/Toddler Shoes" price = "₹3,095"/> */}

      <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=>setTodo(e.target.value)} />
      <button>Add</button>
      </form>
    </div>

  )
}



export default App
