// This file use to take actions

import { createReducer, on } from '@ngrx/store';
import { decrement, increment, division, multiply } from './counter.actions';

/*export const counterReducer = (state: number = 10, action: Action) => {
  switch (action.type) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    default:
      return state;
  }
};*/
export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, { number }) => state * number),
  on(division, (state, { number }) => state / number)
  // on(reset, (state) => 0)
);

export const counterReducer = (state: number = initialState, action: any) =>
  _counterReducer(state, action);
