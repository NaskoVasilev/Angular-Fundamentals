import { Component, ElementRef, ViewChild, ContentChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'softuni-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('nameInput') nameInput: ElementRef;

  todos = [];

  constructor() {

  }

  ngAfterViewInit() {
    this.nameInput.nativeElement.value = 100;
  }

  addTodo(title: string) {
    this.todos.push({ title, completed: false });
  }

  toggleCompleted(idx: number, data: number) {
    console.log(data);
    const currentTodo = this.todos[idx];
    this.todos[idx] = { ...currentTodo, completed: !currentTodo.completed };
  }
}
