import React, { useContext } from "react";
import { CounterContext } from "../context/counter-context";

const Buttons = () => {
  const { increment, decrement, incrementByAmount } =
    useContext(CounterContext);

  return (
    <React.Fragment>
      <button
        aria-label="Increment value"
        onClick={() => incrementByAmount(50)}
      >
        Increment by 50
      </button>
      <button aria-label="Increment value" onClick={increment}>
        Increment
      </button>
      <button aria-label="Decrement value" onClick={decrement}>
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Buttons;
