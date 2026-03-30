import Productitem from "./Productitem";


export default function Productlist(props){
    const name = props.name;
    return(
        <>
        <Productitem name = {name}/>
        
        </>
    )
}