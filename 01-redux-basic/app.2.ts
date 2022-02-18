import {
  incrementAction,
  decrementAction,
  multiplyAction,
  divisionAction,
  resetAction,
} from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";


console.log(counterReducer(10, incrementAction)); // 11

console.log(counterReducer(134, incrementAction)); // 135

console.log(counterReducer(10, decrementAction)); // 9

console.log(counterReducer(10, multiplyAction)); // 20

console.log(counterReducer(10, divisionAction)); // 5

console.log(counterReducer(10, resetAction)); // 5
