import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store';
import { AddCourse } from '../store/reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {

  constructor(private store : Store<IAppState>, private router: Router) { }

  addCourse(name, url) {
    this.store.dispatch(
     new AddCourse({name : name, url: url})
    ); 
    this.router.navigate(['/course/all']);
  }


}
