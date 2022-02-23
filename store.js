import { configureStore } from '@reduxjs/toolkit'

import todoSlice from "./features/Todo/components/todos/todosSlice";
import filterSlice from "./features/Todo/components/filter/filterSlice";
import usersSlice from './features/post/components/users/users.Slice';
import postsSlice from './features/post/components/posts/postsSlice';

const store = configureStore({
    reducer: {
        todos: todoSlice,
        filter: filterSlice,
        users: usersSlice,
        posts: postsSlice,
    },
    devTools: true
})

export default store