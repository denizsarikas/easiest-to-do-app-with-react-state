import React from "react";

const ToDoList = ({ todos, setTodos }) => {

  const deleteToDo = index => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};

  return (
    <div className='todo-container'>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <p>{todo}</p>
          <button onClick={() => deleteToDo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;

