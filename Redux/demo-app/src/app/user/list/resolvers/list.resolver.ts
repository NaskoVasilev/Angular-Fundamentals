import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../../user.service';
import { IAppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { tap, mapTo } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ListResolver implements Resolve<Observable<boolean>> {
    constructor(private userService: UserService, private store: Store<IAppState>) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.userService.load()
        .pipe(tap(users => {
            this.store.dispatch({ type: 'LOAD_USERS_SUCCESS', payload: users});
        }), mapTo(true));
    }
}