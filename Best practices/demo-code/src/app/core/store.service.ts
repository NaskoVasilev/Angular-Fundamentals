import { Injectable } from '@angular/core';
import IState from '../shared/interfaces/state';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  state: IState = {
    userList: []
  }

  private store: BehaviorSubject<IState> = new BehaviorSubject<IState>(this.state);

  select<T>(selector: (state: IState) => T): Observable<T>{
    return this.store.pipe(map(selector));
  }

  update(actionReducer: (state: IState) => Partial<IState>): void{
    this.state = Object.assign({}, this.state, actionReducer(this.state));
    this.store.next(this.state);
  }
}
