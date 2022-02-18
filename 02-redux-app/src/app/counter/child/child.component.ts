import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {
  @Input('counter') counter: number = 10;
  @Output() changeCounter = new EventEmitter<number>();
  multiply = () => {
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  };

  division = () => {
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  };

  updateCounter = (counter: number) => {
    this.counter = counter;
    this.changeCounter.emit(this.counter);
  };
}
