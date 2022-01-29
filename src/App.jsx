import React from "react";
import { useReducer } from "react";

const myReducer = (state1, action) => {
  switch (action.type) {
    case "inc_one":
      return { ...state1, count1: state1.count1 + 1 };

    case "dec_one":
      return { ...state1, count1: state1.count1 - 1 };
    case "res_one":
      return { ...state1, count1: (state1.count1 = 0) };

    case "inc_two":
      return { ...state1, count2: state1.count2 + 1 };

    case "dec_two":
      return { ...state1, count2: state1.count2 - 1 };
    case "res_two":
      return { ...state1, count2: (state1.count2 = 0) };

    case "inc_three":
      return { ...state1, count3: state1.count3 + 1 };

    case "dec_three":
      return { ...state1, count3: state1.count3 - 1 };
    case "res_three":
      return { ...state1, count3: (state1.count3 = 0) };

    default:
      throw new Error("MyError");
  }

  return state1;
};

const App = () => {
  const [state, dispatch] = useReducer(myReducer, {
    count1: 0,
    count2: 0,
    count3: 0,
  });

  return (
    <div>
      <div>{state.count1}</div>

      <button onClick={() => dispatch({ type: "inc_one" })}>INC_1</button>
      <button onClick={() => dispatch({ type: "dec_one" })}>DEC_1</button>
      <button onClick={() => dispatch({ type: "res_one" })}>RES_1</button>

      <hr />
      <div>{state.count2}</div>

      <button onClick={() => dispatch({ type: "inc_two" })}>INC_2</button>
      <button onClick={() => dispatch({ type: "dec_two" })}>DEC_2</button>
      <button onClick={() => dispatch({ type: "res_two" })}>RES_2</button>
      <hr />
      <div>{state.count3}</div>

      <button onClick={() => dispatch({ type: "inc_three" })}>INC_3</button>
      <button onClick={() => dispatch({ type: "dec_three" })}>DEC_3</button>
      <button onClick={() => dispatch({ type: "res_three" })}>RES_3</button>
    </div>
  );
};

export default App;
