import { useSelector } from "react-redux";

import { todoListRemaining } from "./todosSlice";

const RemainingTodos = () => {
  const count: number = useSelector(todoListRemaining);
  const suffix = count === 1 ? "" : "s";

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

export default RemainingTodos;
