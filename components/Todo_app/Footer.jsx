import { ColorFilters, StatusFilter, RemainingTodos, Actions } from "./";

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
