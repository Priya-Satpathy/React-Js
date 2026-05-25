import { useContext } from "react";
import { UserContext } from "./App";

function CheckOut(){
    let {user} = useContext(UserContext)
    return(
        <h1>Hello {user}</h1>
    )
}
export default CheckOut;