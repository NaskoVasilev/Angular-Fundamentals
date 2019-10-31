import { Injectable } from '@angular/core';
import {of as observableOf, Observable} from 'rxjs'
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = [
    {
      id: 1,
      userId: 1,
      title: 'Post 1'
    },
    {
      id: 2,
      userId: 1,
      title: 'Post 2'
    }
  ]

  constructor() { }

  load(){
    return observableOf(this.posts).pipe(delay(100));
  }
}
