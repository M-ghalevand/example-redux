import { shallowEqual, useSelector } from "react-redux";

import TodoListItem from "./TodoListItem";
import { selectFilterdTodoIds } from "./todosSlice";

const TodoList = () => {
  const todosId = useSelector(selectFilterdTodoIds, shallowEqual);

  const renderedListItems = todosId.map((id) => {
    return <TodoListItem key={id} id={id} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
