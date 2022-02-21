import { add, toggle, edit, deleteItem, toggleAll, clearCompleted } from './todo.actions';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
export const initialListState: Array<Todo> = [
  new Todo('Learn Redux From scratch'),
  new Todo('Learn Python From scratch', true),
  new Todo('Learn GraphQL From scratch', true),
  new Todo('Create my portfolio with search in Angular'),
  new Todo('Write book: Angular Schematics from scratch step by step'),
];
const _todoReducer = createReducer(
  initialListState,
  on(add, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  }),
  on(edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        };
      }
      return todo;
    });
  }),
  on(deleteItem, (state, {id}) => {
    return state.filter(todo => todo.id !== id)
  }),
  on(toggleAll, (state, { completed }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed,
      };
    });
  }),
  on(clearCompleted, (state) => state.filter(todo => !todo.completed))
);

export function todoReducer(
  state: any = initialListState,
  action: any
): Todo[] {
  return _todoReducer(state, action);
}
