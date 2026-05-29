import { deleteTodo } from "../api/todos";
import Todo from "./Todo"

function ContainerTodo({todos}) {

    function handleEdit() {

    }
 
    async function handleDelete(id) {
        await deleteTodo(id)
    }

    return (
        <div id="container_todo">
            {todos.map((todo) => {
                const id = todo["id"];
                const todoText = todo["Todo"];
                return <Todo {...{id, todoText, handleDelete, handleEdit}}/>
            })}
        </div>
    )
}

export default ContainerTodo