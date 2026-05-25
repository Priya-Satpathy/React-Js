import React, { useState } from 'react'

const Todo = () => {
    const[todo,setTodo] = useState("");
    const[todos,setTodos] = useState([])
    function handleSubmit(){
        e.preventDefault();
        console.log(todo);
        setTodos([...todos,todo])
        setTodo("")
        
    }
  return (
    <div>
      {todos.map((item)=>{
        
      })}
    </div>
  )
}

export default Todo
