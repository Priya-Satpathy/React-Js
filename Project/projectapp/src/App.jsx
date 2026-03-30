import { useState } from "react"

function App() {
  const[todo,setTodo] = useState("");
  const[todos,setTodos] = useState([]);
    function handleSubmit(e){
      e.preventDefault();
      console.log(todo);

      setTodos([...todos, todo]);
    }

  return (
    <>
       <form onSubmit={handleSubmit}>
          <input type = "text" onChange={(e)=>setTodo(e.target.value)}/>
          <button type="submit">Add</button>
          <h1>{todos}</h1>
        </form>
        {console.log(todos)}
    </>
  )
}

export default App
