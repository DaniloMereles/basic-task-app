import { Todo } from "./Todo"

export const ListaDeTareas = ({todos, deleteTodo, completedTodo, setUpdateTodo}) => {
    return (
        <div className="w-50%">
            <h2>Lista de tareas</h2>
            {
                todos.length === 0 ? 
                    <p className="alert alert-success">No hay tareas por favor agrega una</p>
                :
                    todos.map(todo => (
                        <Todo 
                            todo={todo}
                            deleteTodo={deleteTodo}
                            completedTodo={completedTodo}
                            setUpdateTodo={setUpdateTodo}
                            key={todo.title}
                        />
                    ))
            }

        </div>
    )
}
