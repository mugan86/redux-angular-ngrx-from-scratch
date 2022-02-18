import { Action } from "./ngrx-fake/ngrx";
import {
  incrementAction,
  decrementAction,
  multiplyAction,
  divisionAction,
  resetAction,
} from "./counter/counter.actions";
const reducer = (oldState = 10, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return (oldState += 1);
    case "DECREMENT":
      return (oldState -= 1);
    case "MULTIPLY":
      return (oldState *= action.payload);
    case "DIVISION":
      return (oldState /= action.payload);
    case "RESET":
      return (oldState = 0);
    default:
      return oldState;
  }
};

console.log(reducer(10, incrementAction)); // 11

console.log(reducer(134, incrementAction)); // 135

console.log(reducer(10, decrementAction)); // 9

console.log(reducer(10, multiplyAction)); // 20

console.log(reducer(10, divisionAction)); // 5

console.log(reducer(10, resetAction)); // 5
