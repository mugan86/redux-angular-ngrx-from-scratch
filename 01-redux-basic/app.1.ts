// Action: Specify that action

interface IAction {
  type: string;
  payload?: any; // Params to add in specify action
}

const reducer = (oldState = 10, action: IAction) => {
  if (action.type === "INCREMENT") {
    return (oldState += 1);
  }
  if (action.type === "DECREMENT") {
    return (oldState -= 1);
  }
  return oldState;
};

// Actions definitions

const incrementAction: IAction = {
  type: "INCREMENT",
};

const decrementAction: IAction = {
  type: "DECREMENT",
};

console.log(reducer(10, incrementAction));

console.log(reducer(134, incrementAction));

console.log(reducer(10, decrementAction));