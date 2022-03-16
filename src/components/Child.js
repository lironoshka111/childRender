import { useContext } from "react";
import CounterContext from "../CounterContext";

const Child = () => {
  const context = useContext(CounterContext);
  return (
    <div className="child-wrapper">
      <h1>This is child</h1>
      <button onClick={context.incCount}>Increment</button>
    </div>
  );
};

export default Child;
