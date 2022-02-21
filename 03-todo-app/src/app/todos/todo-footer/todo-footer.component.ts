import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  actualFilter: string = validFilters.ALL;
  filtersList: Array<string> = [
    validFilters.ALL,
    validFilters.COMPLETE,
    validFilters.PENDING,
  ];
  pendingTodos: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.actualFilter = state.filter;
      this.pendingTodos = state.todos.filter( todo => !todo.completed).length
    });
  }
  changeFilter(filter: string) {
    this.store.dispatch(setFilter({filter}))
  }
}
