import React, { useState } from 'react'

const Todo = () => {

    const[todo,setTodo] = useState("")

  return (
    <div>
     <h1>Todo</h1>
     <form>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button>ADD</button>
     </form>
    </div>
  )
}

export default Todo
