import { createContext } from "react";

const CounterContext = createContext({
  count: 0,
  incCount: () => {},
  decCount: () => {}
});

export default CounterContext;
