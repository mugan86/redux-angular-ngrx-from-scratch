import { validFilters } from './filter/filter.actions';
import { Todo } from './todos/models/todo.model';

export interface AppState {
  todos: Array<Todo>;
  filter: validFilters;
}
