import { Actions, ColorFilters, RemainingTodos, StatusFilter } from "./";
import { Button } from "@mui/material/";

const Footer = () => {
  return (
    <footer className="footer">
      <Actions />
      <RemainingTodos />
      <StatusFilter />
      <ColorFilters />
    </footer>
  );
};

export default Footer;
