function NewTodo({inputValue, handleTextChange, handleAddClick}) {
    return (
        <div id="new_todo">
            <input type="text" onChange={handleTextChange} value={inputValue}/>
            <button onClick={handleAddClick}>➕</button>
        </div>
    )
}

export default NewTodo