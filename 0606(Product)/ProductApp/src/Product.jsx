import { useState } from "react";

export default function Product(){
    const[name,showProduct] = useState("");
    const[price,showPrice] = useState("");
    const[type , showType] = useState("");

    function Product1(){
        showProduct("Air");
        showPrice("1000");
        showType("Football");
    }

    function Product2(){
        
        showProduct("Air1");
        showPrice("10000");
        showType("Football");
    
    }
    return (
        
       <div>
        <button onClick={Product1}>Product1</button> 
       <button onClick={Product2}>Product2</button>
        <h1>{name}</h1>
        <h3>{price}</h3>
        <h3>{type}</h3>
    </div> 
       

    )
}