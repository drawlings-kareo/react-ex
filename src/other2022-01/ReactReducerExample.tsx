import React from "react";

const initialState = { count: 0, countB: 2, countC: 3, countD: 9 };

function reducerB(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, countB: 4, countC: state.countC + state.countB };
    case "decrement":
      return { ...state, count: state.count - 1, countB: -2, countC: state.countC - state.countB };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatchB] = React.useReducer(reducerB, initialState);
  return (
    <>
      Count: {state.count}
      Count: {state.countB}
      Count: {state.countC}
      <button onClick={() => dispatchB({ type: "decrement" })}>-</button>
      <button onClick={() => dispatchB({ type: "increment" })}>+</button>
    </>
  );
}

export default function ReactReducerExample() {
  return <Counter />;
}
