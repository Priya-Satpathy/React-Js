import TodoItem from "./Todoitem";
export default function TodoList({todos,setTodos}){
    return (    
    <div>
          
        {todos.map((item)=> ( 
            <TodoItem key={item} item = {item} todos = {todos} setTodos = {setTodos}/>
                
            ))}
    </div>

    )
}