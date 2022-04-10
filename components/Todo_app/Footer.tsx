import { Actions, ColorFilters, RemainingTodos, StatusFilter } from "./";

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
