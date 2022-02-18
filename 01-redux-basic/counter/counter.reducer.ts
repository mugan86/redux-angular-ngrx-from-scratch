import { Action } from "../ngrx-fake/ngrx";

export const counterReducer = (oldState = 10, action: Action) => {
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
