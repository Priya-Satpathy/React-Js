import { useState } from "react"

export default function Product(){
    const[name,showProduct] = useState("");
    const[type,showType] = useState("");
    const[price,showPrice] = useState("");

    function shoeProduct(a,b,c){
        showProduct(a);
        showType(b);
        showPrice(c);
    }

    return (
        <div style={{border:"1px solid black",width:"30%"}}>
            <button onClick={()=>{shoeProduct("Product1","football","mrp:3000")}}>Product1</button>
             <button onClick={()=>{shoeProduct("Product2","vollyball","mrp:3600")}}>Product2</button>
              <button onClick={()=>{shoeProduct("Product3","hockey","mrp:3080")}}>Product3</button>
            <div>
                <h2>{name}</h2>
                <h3>{type}</h3>
                <h3>{price}</h3>
            </div>
        </div>
    )
}