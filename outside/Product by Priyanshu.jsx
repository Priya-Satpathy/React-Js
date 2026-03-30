import { useState } from "react";
import "./Product.css"

export default function Product(){
    
    const [name, changeName] = useState('')
    const [type, changeType] = useState('')
    const [price, changePrice] = useState('')


    function showProduct(n, t, p){
        changeName(n);
        changeType(t);
        changePrice("Rs"+p);
    }


    return(
        <div>
            <button onClick={()=>{showProduct("Product1", "Formal", 200)}}>Product1</button>
            <button onClick={()=>{showProduct("Product2", "Casual", 300)}}>Product2</button>
            <button onClick={()=>{showProduct("Product3", "Sports", 500)}}>Product3</button>

            <div>
                <h1>{name}</h1>
                <h3>{type}</h3>
                <h3>{price}</h3>
            </div>
        </div>
    )
}