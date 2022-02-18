import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styles: [
  ]
})
export class GrandsonComponent {
  @Input('counter') counter: number = 10;
  @Output() changeCounter = new EventEmitter<number>();

  reset = () => {
    this.counter = 0;
    this.changeCounter.emit(this.counter);
  };

}
