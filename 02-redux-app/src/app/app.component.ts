import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from './counter/counter.actions';
interface IAppState {
  count: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  counter: number;

  // count$: Observable<number>

  constructor (private store: Store<IAppState>) {
    this.counter = 10;
    this.store.subscribe((state) => {
      this.counter = state.count;
    });
  }

  increment = () => this.store.dispatch(increment())
  decrement = () => this.store.dispatch(decrement())

  updateCounter = (counter: number) => this.counter = counter;
}
