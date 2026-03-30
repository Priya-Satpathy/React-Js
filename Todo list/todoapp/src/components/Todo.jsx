import React, { useState } from 'react'
import TodoList from './TodoList'


 const[todos,setToddos] = useState([])


const Todo = () => {
  return (
    <div>
        <Form todos = {todos} setToddos= {setToddos} />
        <TodoList todos = {todos} />
    </div>
  )
}

export default Todo
