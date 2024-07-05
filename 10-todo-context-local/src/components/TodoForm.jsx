import { useTodo } from "../contexts";
import { useState } from "react";
function TodoForm() {
    const [message, setMessage] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault();
        if (!message) return;
        addTodo({ message, completed: false })
    }

    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

