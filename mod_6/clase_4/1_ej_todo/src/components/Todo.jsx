function Todo({id, todoText, handleEdit, handleDelete}) {
    return(
        <div class="todo">
            <p>{id}</p>
            <p>{todoText}</p>
            <button onClick={handleEdit}>📝</button>
            <button onClick={() => {handleDelete(id)}}>❌</button>
        </div>
    )
}

export default Todo