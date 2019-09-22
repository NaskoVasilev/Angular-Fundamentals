import { Component, ViewChild, ElementRef, AfterViewInit, DoCheck } from '@angular/core';
import { TodoService } from './todo.service';
import { ITodo } from './interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'softuni-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  @ViewChild('filterInput') filterInput: ElementRef;

  todos: ITodo[] = [];

  constructor(private todoService: TodoService, private httpClient: HttpClient) {
    this.todoService.load();
  }

  ngDoCheck(): void {
    this.todos = this.todoService.todos;
  }

  ngAfterViewInit(): void {
    // fromEvent(this.filterInput.nativeElement, 'keyup')
    // .pipe(
    //   throttleTime(500),
    //   map(() => this.filterInput.nativeElement.value)
    // )
    // .subscribe((value) => {
    //   console.log(value);
    // });
  }

  addTodo(title: string) {
    this.todoService.addTodo(title);
  }

  toggleCompleted(idx: number, data: number) {
    this.todoService.toggleCompleted(idx, data);
  }
}
