import { createContext, useContext } from 'react';
export const TodoContext = createContext({
    todos: [
        { id: 1, title: 'First Todo', completed: false },
        { id: 2, title: 'Second Todo', completed: false },
        { id: 3, title: 'Third Todo', completed: false },
    ],
    addTodo: (todo) => {
        console.log('Add Todo Function')

    },
    toggleTodo: (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    },
    deleteTodo: (id) => {

    },
    editTodo: (id, todo) => { },
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;