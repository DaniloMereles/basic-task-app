export const Todo = ({todo, deleteTodo, completedTodo, setUpdateTodo}) => {
    return (
        <article className="card mb-4">
                <div className="card-body">
                    <h3 className="card-title">
                        {todo.title}
                    </h3>

                    <p className="card-text">
                        {todo.description}
                    </p>

                    <hr />

                    <button className="btn btn-sm btn-primary" onClick={() => setUpdateTodo(todo)}>
                        Editar
                    </button>

                    <button className={`btn btn-sm ${todo.completed === true ? "btn-success" : "btn-outline-danger"}`} onClick={() => completedTodo(todo.id)}>
                        {todo.completed === false ? "Terminar" : "Terminado"}
                    </button>

                    <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>
                        Eliminar
                    </button>
                </div>
        </article>
    )
}
