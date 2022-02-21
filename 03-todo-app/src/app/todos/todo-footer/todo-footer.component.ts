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
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('filter').subscribe((filter) => {
      this.actualFilter = filter;
    });
  }
  changeFilter(filter: string) {
    this.store.dispatch(setFilter({filter}))
  }
}
