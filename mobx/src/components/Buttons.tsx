import React from "react";

import store from "../store";

const Buttons = () => {
  return (
    <React.Fragment>
      <button
        aria-label="Increment value"
        onClick={() => store.incrementByAmount(50)}
      >
        Increment by 50
      </button>
      <button aria-label="Increment value" onClick={() => store.increment()}>
        Increment
      </button>
      <button aria-label="Decrement value" onClick={() => store.decrement()}>
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Buttons;
