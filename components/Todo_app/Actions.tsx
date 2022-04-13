import { useDispatch } from "react-redux";
import { Button } from "@mui/material/";

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
      <Button
        variant="contained"
        className="bg-sky-900 font-bold ml-2"
        color="info"
        onClick={handlMarkAllCompleted}
      >
        Mark All Completed
      </Button>
      <Button
        variant="contained"
        className="bg-sky-900 font-bold ml-2"
        color="info"
        onClick={handlClearCompleted}
      >
        Clear Completed
      </Button>
    </div>
  );
};

export default Actions;
