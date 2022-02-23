import { useDispatch } from "react-redux";

import { clearCompleted, markAllCompleted } from "../todos/todosSlice";

const Actions = () => {
  const dispatch = useDispatch();

  const handlMarkAllCompleted = () => dispatch(markAllCompleted());

  const handlClearCompleted = () => dispatch(clearCompleted());
  return (
    <div className="actions">
      <h5>Actions</h5>
      <button className="button" onClick={handlMarkAllCompleted}>
        Mark All Completed
      </button>
      <button className="button" onClick={handlClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default Actions;
