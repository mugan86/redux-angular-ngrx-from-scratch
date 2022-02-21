import { validFilters } from 'src/app/filter/filter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];
  actualFilter: string = validFilters.ALL;
  constructor(private store: Store<AppState>) { }
    

  ngOnInit(): void {
    this.store.subscribe(( state) => {
      this.actualFilter = state.filter;
      this.todos = state.todos;
    });
  }

}
