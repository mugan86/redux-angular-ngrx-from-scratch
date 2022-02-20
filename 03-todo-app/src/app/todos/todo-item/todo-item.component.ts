import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo!: Todo;
  @ViewChild('inputElement') txtInputElement!: ElementRef;

  todoCompleted!: FormControl;
  txtInput!: FormControl;
  editState: boolean = false;

  ngOnInit(): void {
    this.todoCompleted = new FormControl( this.todo!.completed );
    this.txtInput = new FormControl( this.todo!.text, Validators.required );
  }

  edit() {
    this.editState = true;
    setTimeout(() => {
      this.txtInputElement.nativeElement.select();
    }, 1)
    
  }

  lostFocus = () => this.editState = false;

}
