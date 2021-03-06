import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { availableColors } from "./filterSlice";
import {
  todoToggled,
  todoDeleted,
  colorChange,
  selectTodosIds,
  capitalize,
} from "./todosSlice";

const TodoListItem = ({ id }) => {
  const todo = useSelector(selectTodosIds(id));
  const dispatch = useDispatch();
  const { text, completed, color } = todo;

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c} className="text-sm">
      {capitalize(c)}
    </option>
  ));

  const handelCompletedChange = () => {
    dispatch(todoToggled(todo.id));
  };

  const handelClose = () => {
    dispatch(todoDeleted(todo.id));
  };

  const handelChangColor = (e) => {
    // @ts-ignore
    dispatch(colorChange(todo.id, e.target.value));
  };

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handelCompletedChange}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker text-sm"
            defaultValue={color}
            style={{ color }}
            onChange={handelChangColor}
          >
            <option value="" />

            {colorOptions}
          </select>
          <button className="destroy trash" onClick={handelClose}>
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
