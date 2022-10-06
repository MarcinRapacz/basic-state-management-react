import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../app/counterSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(50))}
      >
        Increment by 50
      </button>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Buttons;
