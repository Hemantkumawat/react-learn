import React, { createContext, useContext, useState } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            message: "Todo message",
            completed: false
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (todo) => { },
});

export const useTodo = () => {
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;
