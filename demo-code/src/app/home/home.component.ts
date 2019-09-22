import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ITodo } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'softuni-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('text')
  textInput: ElementRef
  
  todos: ITodo[]
  constructor(private activatedRoute: ActivatedRoute) {
    this.todos = activatedRoute.snapshot.data[0];
   }

  ngOnInit() {
  }
}
