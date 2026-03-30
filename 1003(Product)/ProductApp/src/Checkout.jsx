import Addcart from "./Addcart";

export default function Checkout(props){
    const name = props.name;
    return(
        <>
        <Addcart name = {name}/>
            
        </>
    )
}