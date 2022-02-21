import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: string): Todo[] {

    switch(filter) {
      case validFilters.COMPLETE:
        return todos.filter( todo => todo.completed)
      case validFilters.PENDING:
          return todos.filter( todo => !todo.completed)
      default:
        return todos;
    }
  }

}
