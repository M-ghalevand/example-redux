import ColorFilters from "./ColorFilters";
import StatusFilter from "./StatusFilter";
import RemainingTodos from "./RemainingTodos";
import Actions from "./Actions";

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
