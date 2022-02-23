import { useSelector } from "react-redux";

import { todoListRemaining } from "../todos/todosSlice";

const RemainingTodos = () => {
  const count = useSelector(todoListRemaining);

  const suffix = count === 1 ? "" : "s";

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

export default RemainingTodos;
