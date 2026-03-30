import Child from "./Child";

export default function Mother(props){
    const stat = props.stat; 
    return(
        <>
            <Child stat = {stat}/>
        </>
    )
}