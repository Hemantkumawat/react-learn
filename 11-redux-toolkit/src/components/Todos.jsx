import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (<div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.title}
                    <button onClick={() => dispatch(onClick(todo.id))}>X</button>
                </li>
            ))}
        </ul>
    </div>)
}

export default Todos;