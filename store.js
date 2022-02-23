import { configureStore } from '@reduxjs/toolkit'

import todoSlice from "./components/Todo/features/todos/todosSlice";
import filterSlice from "./components/Todo/features/filter/filterSlice";

const store = configureStore({
    reducer: {
        todos: todoSlice,
        filter: filterSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store