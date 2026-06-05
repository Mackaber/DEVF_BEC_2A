import { useState } from "react"

function Todo({id, todoText, editTodo, deleteTodo}) {
    const [todoTextValue, setTodoTextValue] = useState(todoText)
    const [editing, setEditing] = useState(false)

    function handleEdit() {
        setEditing(true)
    }

    function handleEditDone() {
        editTodo(id, todoTextValue)
        setEditing(false)
    }

    function handleEditOnChange(e) {
        setTodoTextValue(e.target.value)
    }


    return(
        <div class="todo">
            <p>
                <span>{id}    </span>
                <span>{editing ? 
                    <>
                        <input value={todoTextValue} onChange={handleEditOnChange}/>
                        <button onClick={handleEditDone}>DONE!</button>
                    </> :
                    todoText }   </span>
                <button onClick={handleEdit}>📝</button>
                <button onClick={() => {deleteTodo(id)}}>❌</button>
            </p>
        </div>
    )
}

export default Todo