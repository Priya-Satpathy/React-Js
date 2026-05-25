import { useContext, useState } from "react"
import { UserContext } from "./App";

function Login(){
    const{user,setUser} = useContext(UserContext)
    const[value,setValue] = useState("")
    function handleSubmit(e){
        e.preventDefault()
       setUser(value)
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
            <button type="submit">Login</button>
        </form>
        
    )
}
export default Login