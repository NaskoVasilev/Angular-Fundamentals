import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { ITodo } from '../interfaces';

@Component({
  selector: 'softuni-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  todo: ITodo = null;

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) {
    todoService.loadById(activatedRoute.snapshot.params.id).subscribe(todo => this.todo = todo);
   }
}
