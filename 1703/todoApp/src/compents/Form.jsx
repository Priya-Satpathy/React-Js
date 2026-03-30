import React, { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div>
      <h2>Todo App</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit">ADD</button>
      </form>

      <div>
        {todos.map((item) => (
          <h3 key={item}>{item}</h3>
        ))}
      </div>
    </div>
  );
};

export default Form;