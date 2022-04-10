import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusFilter,
  selectStatusFilter,
  StatusFilters,
} from "./filterSlice";

const StatusFilter = () => {
  const status = useSelector(selectStatusFilter);

  const dispatch = useDispatch();

  const handlChangeStatus = (status) => {
    dispatch(changeStatusFilter(status));
  };
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value: string = StatusFilters[key];
    const className = value === status ? "selected" : "";

    return (
      <li key={value}>
        <button className={className} onClick={() => handlChangeStatus(value)}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

export default StatusFilter;
