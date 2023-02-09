import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const ToDoForm = ({ setTodos, todos }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue === "") {
      toast.error("please enter a todo!");
    } else if (todos.includes(todoValue)) {
      toast.error("this todo already exists!");
    } else if (todoValue.length < 3) {
      toast.error("at least 3 chars...");
    } else {
      const trimmedValue = todoValue.trim()
      setTodos([...todos, trimmedValue]);
      setTodoValue("");
      toast.success("TO-DO ADDED!");
    }
  };
  return (
    <form action="" id="todo-form">
      <input
        type="text"
        id="form-input"
        placeholder="enter your todo"
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <button onClick={handleSubmit} className="border-solid border-2">
        +
      </button>
    </form>
  );
};

export default ToDoForm;
