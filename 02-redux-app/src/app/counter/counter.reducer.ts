// This file use to take actions

import { Action } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

export const counterReducer = (state: number = 10, action: Action) => {
  switch (action.type) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    default:
      return state;
  }
};
