import { useState } from "react"
import "./product.css"
export default function Product(){
    let[product,setProduct] = useState("Air Jordan");
    let[type,setType] = useState("Air Jordan1");
    let[price,setPrice] = useState("Air Jordan2");

    function handleChange(a,b,c){
        setProduct(a);
        setType(b);
        setPrice(c);
    }
    return(
        <div className="main">
            <div className="one">
            <button onClick={()=>{handleChange("Air Jordan", "football", "2000")}}>Product1</button>
            <button onClick={() =>{handleChange("Air Jordan1", "basketball", "2500")}}>Product2</button>
            <button onClick={()=>{handleChange("Air Jordan2", "vollyball", "2900")}}>Product3</button>
            </div>
            <div className="product">
                <h2>{product}</h2>
                <h3>{type}</h3>
                <h4>{price}</h4>
            </div>
        </div>
    )
}