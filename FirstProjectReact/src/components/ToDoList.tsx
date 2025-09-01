import { CreateToDo } from "./CreateToDo"
import { ListToDo } from "./ListToDo"

export function ToDoList(){
    return(
        <>
            <h1>To Do List</h1>
            
            <CreateToDo />

            <ListToDo />
        </>
    )
}