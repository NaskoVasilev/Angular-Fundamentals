import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanDeactivate } from '@angular/router';
import { HomeComponent } from './home.component';

@Injectable({ providedIn: 'root' })
export class HomeDeactivtor implements CanDeactivate<HomeComponent> {
    constructor() { }

    canDeactivate(
        component: HomeComponent, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): boolean {
        return true;
    }
}