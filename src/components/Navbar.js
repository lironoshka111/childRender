import { useContext } from "react";
import CounterContext from "../CounterContext";

const Navbar = () => {
  const context = useContext(CounterContext);
  return (
    <div className="navbar-wrapper">
      <h1>Count value: {context.count}</h1>
    </div>
  );
};

export default Navbar;
