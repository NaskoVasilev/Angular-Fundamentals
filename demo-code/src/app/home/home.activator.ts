import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { ITodo } from '../interfaces';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';

@Injectable({ providedIn: 'root' })
export class HomeActivtor implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //depends on some logic return true or false
        return true;
    }
}