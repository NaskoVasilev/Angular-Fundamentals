import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ITodo } from '../interfaces';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';

@Injectable({providedIn: 'root'})
export class TodoResolver implements Resolve<ITodo[]>{
    constructor(private totdoService: TodoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> {
        return this.totdoService.load();
    }
}