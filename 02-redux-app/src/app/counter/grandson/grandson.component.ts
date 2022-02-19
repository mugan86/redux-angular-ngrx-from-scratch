import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { IAppState } from 'src/app/app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styles: [
  ]
})
export class GrandsonComponent {
  
  count$: Observable<number>;
  constructor(private store: Store<IAppState>) {
    this.count$ = this.store.select('count');
  }
  reset = () => this.store.dispatch(reset())
}
