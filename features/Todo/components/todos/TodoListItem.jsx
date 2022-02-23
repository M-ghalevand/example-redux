import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { availableColors } from "../filter/filterSlice";
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
    <option key={c} value={c}>
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
            className="colorPicker"
            defaultValue={color}
            style={{ color }}
            onChange={handelChangColor}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={handelClose}>
            <FontAwesomeIcon icon={faTrashCan} style={{ fontSize: "1.7rem" }} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
