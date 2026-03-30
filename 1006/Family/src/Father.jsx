import Mother from "./Mother";

export default function Father(props){
    const stat = props.stat;
    return(
       
        <>
            <Mother stat = {stat}/>
        </>
    )
}