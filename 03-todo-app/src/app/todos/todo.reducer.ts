import { add } from './todo.actions';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
export const initialListState: Array<Todo> = [
  new Todo('Learn Redux From scratch')
];
const _todoReducer = createReducer(
  initialListState,
  on(add, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state: any = initialListState, action: any): Todo[] {
  return _todoReducer(state, action);
}
