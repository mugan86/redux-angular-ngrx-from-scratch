import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from './app.reducers';
import { decrement, increment } from './counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  // counter: number;

  count$: Observable<number>

  constructor (private store: Store<IAppState>) {
    // this.counter = 10;
    // Use to take all select state with subscribe
    /*this.store.subscribe((state) => {
      this.counter = state.count;
    });*/
    // Take only one select element with observable
    this.count$ = this.store.select('count');
    // whitout observable
    this.store.select('count').subscribe(( counter ) => console.log(counter));
  }

  increment = () => this.store.dispatch(increment())
  decrement = () => this.store.dispatch(decrement())

  updateCounter = (counter: number) => console.log();
}
