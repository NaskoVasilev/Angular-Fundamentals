import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Login, ActionTypes, LoginSuccess, LoginFailed, SetToken, Logout, LogoutSuccess, LogoutFailed, Register, RegisterSuccess, RegisterFailed } from './actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

    @Effect() init$ = this.actions$.pipe(ofType('@ngrx/effects/init'), switchMap(() => {
        const token: string = localStorage.getItem('token');
        if (!token) {
            return [];
        }
        return [new SetToken({ token })];
    }))

    @Effect() login$ = this.actions$.pipe(
        ofType<Login>(ActionTypes.Login),
        map(action => action.payload),
        switchMap((body) => {
            return this.authService.login(body)
                .pipe(
                    map((data) => {
                        let username = data.username;
                        let userId = data._id;
                        let token = data._kmd.authtoken;
                        this.router.navigate(['posts']);
                        localStorage.setItem('token', token);
                        return new LoginSuccess({ userId, username, token });
                    }),
                    catchError(error => [new LoginFailed(error)])
                )
        })
    )

    @Effect() register$ = this.actions$.pipe(
        ofType<Register>(ActionTypes.Register),
        switchMap(action => this.authService.register(action.payload).pipe(
            map(() => new RegisterSuccess()),
            tap(() => {
                this.router.navigate(['/login']);
            }),
            catchError(error => [new RegisterFailed(error)])
        ))
    )

    @Effect() logout$ = this.actions$.pipe(
        ofType<Logout>(ActionTypes.Logout),
        switchMap(data => this.authService.logout().pipe(
            map(() => new LogoutSuccess()),
            tap(() => {
                this.router.navigate(['/login']);
                localStorage.clear();
            }),
            catchError(error => [new LogoutFailed(error)])
        ))
    )
}