import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/app.reducers';
import { division, multiply } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {
  count$: Observable<number>
  constructor(private store: Store<IAppState>) {
    this.count$ = this.store.select('count')
  }
  
  multiply = () => {
    /*this.counter *= 2;
    this.changeCounter.emit(this.counter);*/
    this.store.dispatch(multiply({ number: 10 }))
  };

  division = () => {
    /*this.counter /= 2;
    this.changeCounter.emit(this.counter);*/
    this.store.dispatch(division({ number: 3 }));
  };

}
