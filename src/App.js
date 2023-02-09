import React from 'react'
import ToDoForm from './components/ToDoForm'
import { useState } from 'react'
import ToDoList from './components/ToDoList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {

  const [ todos, setTodos ] = useState(['Deniz', 'Deniz2'])


  return (
    <div>
      <ToastContainer />
      <ToDoForm setTodos={setTodos} todos={todos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App