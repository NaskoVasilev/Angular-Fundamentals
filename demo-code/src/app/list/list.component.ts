import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from '../interfaces';

@Component({
  selector: 'softuni-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('text')
  textInput: ElementRef
  
  todos: ITodo[]
  constructor(private activatedRoute: ActivatedRoute) {
    this.todos = activatedRoute.snapshot.data[0];
   }

  ngOnInit() {
  }

}
