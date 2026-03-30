import Addcart from "./Addcart";

export default function Productitem(props){
    const name = props.name;
    return(
        <>
        <Addcart name = {name}/>
        </>
    )
}