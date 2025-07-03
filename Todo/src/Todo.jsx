import { useState } from "react"
export default function Todo(){
    let [todo, setTodo] = useState(["todo list"]);
    let [newTodo, setNewTodo] = useState("");
    function addNewTodo(){
        setTodo([...todo, newTodo]);
        setNewTodo("");

    }
    function updateTodoVal(e){
        setNewTodo(e.target.value);
         }
    let deleteTodo = (index)=> {
        let updatedTodos = todo.filter((_, i)=> i !== index);
        setTodo(updatedTodos);
    }
    return(
        <div>
            <input type="text" placeholder="Enter some text" value={newTodo} onChange={updateTodoVal}/>
            <button onClick={addNewTodo}>Add</button>
            <br /> <br /><br /> <br />
            <hr />
            <ul>
                {
                    todo.map((item, index)=> {
                        return <li>
                            {item}
                            <button onClick={()=> deleteTodo(index)}>Delete</button>
                            </li>
                    })
                }
                
            </ul>
        </div>
    )
}