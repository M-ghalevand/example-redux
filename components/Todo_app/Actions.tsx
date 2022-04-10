import { useDispatch } from "react-redux";

import { clearCompleted, markAllCompleted } from "./todosSlice";

const Actions = () => {
  const dispatch = useDispatch();

  // @ts-ignore
  const handlMarkAllCompleted = () => dispatch(markAllCompleted());

  // @ts-ignore
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
