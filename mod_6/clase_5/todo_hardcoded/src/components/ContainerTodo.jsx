function ContainerTodo({children}) {

    return (
        <div id="container_todo">
            {children.length > 0 ? children : <h1>No hay tareas por mostrar</h1>}
        </div>
    )
}

export default ContainerTodo