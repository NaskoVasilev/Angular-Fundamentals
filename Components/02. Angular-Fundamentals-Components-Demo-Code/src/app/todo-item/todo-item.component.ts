import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../interfaces';

@Component({
  selector: 'softuni-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ITodo;
  @Output() toggleEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCompleted() {
    this.toggleEvent.emit(123);
  }
}
