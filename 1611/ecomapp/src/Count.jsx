import { useState } from "react"

function Count(){
    const[count,setCount] = useState(0);

function handleClick(){
    setCount(count+1);
}

    return(
        <>
           <h1>{count}</h1>
           <button onClick={()=>{
            handleClick()
           }}>Increase</button>
        </>
        )
}
export default Count;