import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
const store = configureStore({
    reducer: authReducer
});


export default store;



/* import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
export const store = configureStore({
    reducer: todoReducer
}); */