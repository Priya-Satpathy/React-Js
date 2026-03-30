import "./Product.css"
export default function Product(props){
    
        const name = props.name;
        const type = props.type;
        const price = props.price;
       
    return (
        <div className = "product">
        <h1>{name}</h1>
        <h3>{type}</h3>
        <h3>{price}</h3>
        </div>
    )
}