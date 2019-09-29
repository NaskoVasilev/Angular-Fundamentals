import { Component, ViewChild, ElementRef, AfterViewInit, DoCheck } from '@angular/core';
import { TodoService } from './todo.service';
import { ITodo } from './interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'softuni-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
}
