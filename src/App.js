// styles
import './App.css'
import { Formulario } from './components/Formulario'
import { ListaDeTareas } from './components/ListaDeTareas'
import {useEffect, useState } from "react"
const initialTodos = []

const getLocalStorage = JSON.parse(localStorage.getItem("todos"))

export const App = () => {
  const [todos, setTodos] = useState(getLocalStorage || initialTodos)
  const [updateTodo, setUpdateTodo] = useState(null)

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const deleteTodo = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
    setUpdateTodo(null)
  }

  const completedTodo = (id) => {
    const newTodo = todos.map(todo => {
      const todoEdit = {
        ...todo,
        completed: !todo.completed
      }

      if(todo.id === id) {
        return todoEdit
      }else{
        return todo
      }
    })

    setTodos(newTodo)
  }

  const createTodo = (newTodo) => {
    setTodos([newTodo ,...todos])
  }

  const editTodo = (newTodo) => {
    const changedTodo = todos.map(todo => {
      if(todo.id === newTodo.id){
        return newTodo
      }else{
        return todo
      }
    })

    setTodos(changedTodo)
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <ListaDeTareas 
            todos={todos}
            deleteTodo={deleteTodo}
            completedTodo={completedTodo}
            setUpdateTodo={setUpdateTodo}
          />
        </div>

        <div className="col-4">
            <Formulario 
              createTodo={createTodo}
              updateTodo={updateTodo}
              setUpdateTodo={setUpdateTodo}
              editTodo={editTodo}
            />
        </div>
      </div>
    </div>
  )
}
