import { useState, useEffect } from "react"
const initialFormValues = {
    title: "",
    description: ""
}

export const Formulario = ({createTodo, updateTodo, setUpdateTodo, editTodo}) => {
    const [formValue, setFormValue] = useState(initialFormValues)
    const [formError, setFormError] = useState(null)
    const [successAdd, setSuccessAdd] = useState(null)

    useEffect(() => {
        if(updateTodo){
            setFormValue(updateTodo)
        }
    }, [updateTodo])

    const handleInputChange = (e) => {
        const newFormValues = {
            ...formValue,
            [e.target.name]: e.target.value
        }
        setFormValue(newFormValues)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(formValue.title.trim() === ""){
            setFormError("El titulo esta vacio")   
            return
        }

        if(formValue.description.trim() === ""){
            setFormError("La descripcion esta vacia")
            return
        }

        if(updateTodo){
            editTodo(formValue)
            setSuccessAdd("La tarea se actualizo correctamente")
            setUpdateTodo(null)
        }else{
            createTodo({
                id: Date.now(),
                title: formValue.title,
                description: formValue.description,
                completed: false        
            })
        }
        
        setFormValue(initialFormValues)
        setFormError(null)
        setSuccessAdd("La tarea se agrego correctamente")
        setTimeout(() => {
            setSuccessAdd(null)
        }, 2000);
    }

    return (
        <div className="w-50%">
            <h2>
                {updateTodo ? "Editar tarea" : "Agregar tarea"}
            </h2>

            {
                updateTodo ?
                <button className="btn btn-sm btn-warning mb-4" onClick={() => {
                    setUpdateTodo(null)
                    setFormValue(initialFormValues)
                }}>
                    Cancelar edicion
                </button>
                :
                null
            }

            <form className="form" onSubmit={handleOnSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Titulo de la tarea" 
                    className="form-control mb-4"
                    value={formValue.title}
                    onChange={handleInputChange}
                />
                <textarea 
                    name="description" 
                    className="form-control" 
                    placeholder="Descricion de la tarea"
                    value={formValue.description}
                    onChange={handleInputChange}
                    ></textarea>
                <button type="submit" className="btn btn-primary mt-4">
                    {updateTodo ? "Editar tarea" : "Agregar tarea"}
                </button>
            </form>

            {
                formError ? <p className="alert alert-danger mt-2">{formError}</p> : null
            }

            {
                successAdd ? <p className="alert alert-success mt-2">{successAdd}</p> : null
            }
        </div>
    )
}
