import { useContext } from "react";
import { CounterContext } from "../context/counter-context";

const Header = () => {
  const { counter } = useContext(CounterContext);
  return <div>{counter}</div>;
};

export default Header;
