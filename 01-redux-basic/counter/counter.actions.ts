import { Action } from "../ngrx-fake/ngrx";

const incrementAction: Action = {
  type: "INCREMENT",
};

const decrementAction: Action = {
  type: "DECREMENT",
};

const multiplyAction: Action = {
  type: "MULTIPLY",
  payload: 2,
};

const divisionAction: Action = {
  type: "DIVISION",
  payload: 2,
};

const resetAction: Action = {
    type: "RESET"
}

export { incrementAction,  decrementAction, multiplyAction, divisionAction, resetAction }
