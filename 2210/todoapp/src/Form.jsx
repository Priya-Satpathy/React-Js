import { useState } from "react";

export default function Form({todos,setTodos}){
    const[todo,setTodo] = useState("");
     

     function handleSubmit(e){
    e.preventDefault();
    // console.log(todo);
    setTodos([...todos,todo]);
    setTodo("");
  }


  return(

     <div>
        <form onSubmit={handleSubmit}>
          <h1>Todo Box</h1>
          <input type="text" value={todo} 
          onChange={(e)=>setTodo(e.target.value)}/>
          <button type="submit">ADD</button>
        </form>

  

        </div>
  )
}