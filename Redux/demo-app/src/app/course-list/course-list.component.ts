import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { Store } from '@ngrx/store';
import { IAppState } from '../store';
import { RemoveCourse } from '../store/reducer';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses$: Observable<Course[]>

  constructor(private store: Store<IAppState>) {
    this.courses$ = store.select(store => store.courses);
  }

  delCourse(index) {
    this.store.dispatch(new RemoveCourse(index))
  }
}
