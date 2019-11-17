import { Injectable } from '@angular/core';
import { Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IAppState, getIsAuthenticated } from 'src/app/store';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
    constructor(private router: Router, private store: Store<IAppState>) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean {
        let isAuthenticated = false;
        this.store.select(getIsAuthenticated)
            .subscribe(isAuth => {
                isAuthenticated = isAuth;
            });

        if (!isAuthenticated) {
            this.router.navigate(['/login']);
        }
        return isAuthenticated;
    }
}