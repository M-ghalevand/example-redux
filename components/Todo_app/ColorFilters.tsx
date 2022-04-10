import { useDispatch, useSelector } from "react-redux";

import {
  availableColors,
  changedColorFilter,
  selectColorsFilter,
} from "./filterSlice";

const ColorFilters = () => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColorsFilter);

  const handlChangeColor = (color, changType) => {
    dispatch(changedColorFilter({ color, changType }));
  };
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);
    const changType = checked ? "removed" : "added";

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          defaultChecked={checked}
          onChange={() => handlChangeColor(color, changType)}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        >
          {""}
        </span>
        {color}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};

export default ColorFilters;
