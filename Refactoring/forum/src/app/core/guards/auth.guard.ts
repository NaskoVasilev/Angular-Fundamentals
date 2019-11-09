import { Injectable } from '@angular/core';
import {  Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean {
        if(this.authService.isAuthenticated()){
            return true;
        }

        this.router.navigate(['/login']);
        return false;    
    }
}