import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "../components/Todo_app/todosSlice";
import filterSlice from "../components/Todo_app/filterSlice";
import usersSlice from "../components/post_app/users.Slice";
import postsSlice from "../components/post_app/postsSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    filter: filterSlice,
    users: usersSlice,
    posts: postsSlice,
  },
  devTools: true,
});

export default store;
