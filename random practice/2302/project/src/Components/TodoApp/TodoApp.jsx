import React, { useState } from "react";

function TodoApp() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    if (!input.trim()) return;

    setTasks([...tasks, input]);   // ✅ add task to tasks array
    setInput("");                  // ✅ clear input
  }

  function handleDelete(index){
    setTasks(tasks.filter((item, i) => i !== index)); // ✅ remove task
  }

 

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>To-Do Mini App 📝</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
        />

        <button type="submit">Add</button>
      </form>

      {/* ✅ Show tasks here */}
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>
              X
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TodoApp;