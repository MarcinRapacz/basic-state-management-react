import React, { useState } from "react";

interface IProps {
  children: React.ReactNode;
}

export const CounterContext = React.createContext<any>(null);

const CounterContextProvider: React.FC<IProps> = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const incrementByAmount = (count: number) => {
    setCounter((prevState) => prevState + count);
  };

  return (
    <CounterContext.Provider
      value={{ counter, increment, decrement, incrementByAmount }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
