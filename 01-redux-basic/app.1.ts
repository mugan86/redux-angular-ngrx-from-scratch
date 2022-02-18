// Action: Specify that action

interface Action {
  type: string;
  payload?: any; // Params to add in specify action
}

const reducer = (oldState = 10, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return (oldState += 1);
    case "DECREMENT":
      return (oldState - 1);
    case "MULTIPLY":
        return (oldState * action.payload);
    case "DIVISION":
        return (oldState / action.payload);
    default:
      return oldState;
  }
};

// Actions definitions

const incrementAction: Action = {
  type: "INCREMENT",
};

const decrementAction: Action = {
  type: "DECREMENT",
};

const multiplyAction: Action = {
  type: "MULTIPLY",
  payload: 2
};

const divisionAction: Action = {
  type: "DIVISION",
  payload: 2
};

console.log(reducer(10, incrementAction)); // 11

console.log(reducer(134, incrementAction)); // 135

console.log(reducer(10, decrementAction)); // 9

console.log(reducer(10, multiplyAction)); // 20

console.log(reducer(10, divisionAction)); // 5