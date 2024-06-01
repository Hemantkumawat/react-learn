import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'First Todo', completed: false },
        { id: 2, title: 'Second Todo', completed: false },
        { id: 3, title: 'Third Todo', completed: false },
    ]);

    const addTodo = (todo) => {
        setTodos(prevTodos => [...prevTodos, todo]);
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        console.log('id', id);
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, updatedTodo) => {
        setTodos(prevTodos =>

            prevTodos.map(todo =>
                todo.id === id ? { ...todo, ...updatedTodo } : todo

            )
        );
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
