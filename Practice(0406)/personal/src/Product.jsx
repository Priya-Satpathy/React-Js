export default function Product(props){
    const name = props.name;
    const type = props.type;
    const price = props.price;
    const place = props .place;
    return (
       <div style={{backgroundColor:"grey"}}>
                <h1>{name}</h1>
                <h3>{type}</h3>
                <h3>{price}</h3>
                <h4>{place}</h4>
       </div>
    )
}