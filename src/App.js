import { useState } from "react";
import CounterContext from "./CounterContext";
import Navbar from "./components/Navbar";
import Child from "./components/Child";
import MidChild from "./components/MidChild";

function AppProvider({ children }) {
  const [count, setCount] = useState(0);

  const incCount = () => setCount((prev) => prev + 1);
  const decCount = () => setCount((prev) => prev - 1);

  const obj = {
    count,
    incCount,
    decCount
  };

  return (
    <CounterContext.Provider value={obj}>{children}</CounterContext.Provider>
  );
}

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Child />
      <MidChild />
    </AppProvider>
  );
}

export default App;
