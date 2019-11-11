import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppUserState } from '../store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  users$: Observable<any[]>

  constructor(private store: Store<IAppUserState>) {
    this.users$ = store.select(store => store.user.list.entites);
   }  

   deleteHandler(id: string){
     this.store.dispatch({ type: 'DELETE_USER', payload: id });
   }
}
