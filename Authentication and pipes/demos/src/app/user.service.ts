import { Injectable } from '@angular/core';
import {of as observableOf, Observable} from 'rxjs'
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      id: 1,
      firstName: 'Nasko',
      lastName: 'Vasilev'
    },
    {
      id: 2,
      firstName: 'Mitko',
      lastName: 'Mitkov'
    },
    {
      id: 3,
      firstName: 'Ivan',
      lastName: 'Vasilev'
    }
  ]

  constructor() { }

  load(){
    return observableOf(this.users).pipe(delay(100));
  }
}
