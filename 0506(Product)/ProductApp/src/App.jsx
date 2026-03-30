import { useState } from "react"
import Product from "./Product"

function App() {
  const [shoe, changeShoe] = useState('')

  function product1(){
    changeShoe(<Product name = "Air Jordan 4 RM" type = "Women's Shoes" price = "MRP : ₹ 12 795.00"/>)
  }
  function product2(){
    changeShoe(<Product name = "Nike Dunk Low Premium" type = "Women's Shoes" price = "MRP : ₹ 11 895.00"/>)
  }
  function product3(){
    changeShoe(<Product name = "Air Jordan 1 Mid" type = "Women's Shoes" price = "MRP : ₹ 10 795.00"/>)
  }

  return (
    <div style={{backgroundColor:"lightblue" }}>
      <h1>{shoe}</h1>
     
       <button onClick={product1}>Product 1</button> 
      <button onClick={product2}>Product 2</button>
      <button onClick={product3}>Product 3</button>
      
      
    </div>
  )
}

export default App
