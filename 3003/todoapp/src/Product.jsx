import React, { useState } from 'react'

const Product = ({ name, type, price }) => {
  const [productName, setProductName] = useState(name);
  const [productType, setProductType] = useState(type);
  const [productPrice, setProductPrice] = useState(price);

  function product1() {
    setProductName("Nike Air Max Bia");
    setProductType("Women's Shoes");
    setProductPrice("₹7,995");
  }

  function product2() {
    setProductName("Nike Flex Runner 4");
    setProductType("Flex Runner 4 Baby/Toddler Shoes");
    setProductPrice("₹3,095");
  }

  return (
    <div>
      <div style={{
        backgroundColor: "grey",
        borderRadius: "10px",
        padding: "10px",
        border: "1px solid yellow",
        margin: "20px"
      }}>
        <button onClick={product1}>Product 1</button>
        <button onClick={product2}>Product 2</button>

        <h1>{productName}</h1>
        <h3>{productType}</h3>
        <h3>{productPrice}</h3>
      </div>
    </div>
  )
}

export default Product