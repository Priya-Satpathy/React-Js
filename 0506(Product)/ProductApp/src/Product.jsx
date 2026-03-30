export default function Product(props){
    const name = props.name;
    const  type = props.type;
    const price = props.price;
    return(
        <div>
            <h3>{name}</h3>
            <h4>{type}</h4>
            <h5>{price}</h5>
        </div>
    );
}