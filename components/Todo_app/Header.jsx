import { useState } from "react";
import { useDispatch } from "react-redux";

import { todoAdded } from "./todosSlice";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChanges = (e) => setText(e.target.value);
  const handleKeyDown = (e) => {
    const trimmedText = text.trim();
    if (e.key === "Enter" && trimmedText) {
      dispatch(todoAdded(trimmedText));

      setText("");
    }
  };

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChanges}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;
