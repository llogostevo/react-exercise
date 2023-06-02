import {useState} from 'react';

import './ToDo.scss'

const ToDo = () =>{
    // create an empty todo list
    const [toDoItems, setToDoItems] = useState([]);
    // create a new todo item that is also empty as a string
    const [newTodo, setNewTodo] = useState('');
    
    
    const handleAddToDo = () => {
        if (newTodo) {
            // spread syntax, takes the original array, and adds newtodo onto it as a new array
            // this is then pased into settodoitems and resets the whole array as a new array
            setToDoItems([...toDoItems,newTodo]);
            //resets the todo to be empty
            setNewTodo('')
        }
    }

    return(
        <div className="todo">
            <h2>todo</h2>
            <div className="addTodo">
                <label for="new-list-item">New Task</label>
                {/* takes the newtodo (which should be empty) 
                when it changes set newtodo and change state */}
                <input type="text" id="new-list-item" name="new-list-item" value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
            </div>
            {/* when clicked the handleTodo will be run, if there is a value in todo then it will apply the ifstatement in handle todo */}
            <button onClick={handleAddToDo}>Add To List</button>

            <ul className="list">
                {/* map through each item in the todoitems array and create an li
                returing the newly mapped array as the list when complete */}
                {toDoItems.map((todo, index)=>(
                    // use of index as a variable to track the key
                    <li key={index}>{todo}</li>
                ))}
            </ul>            
        </div>
    )
}

export default ToDo;