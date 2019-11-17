import { Injectable } from '@angular/core';
import { tap, switchMap, take } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { IAppState, getAuthToken } from 'src/app/store';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private toastrService: ToastrService, private store: Store<IAppState>) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select(getAuthToken).pipe(
            take(1),
            switchMap(token => {
                if (req.url.endsWith(`/user/${APP_KEY}`) || req.url.endsWith('login')) {
                    req = req.clone({
                        setHeaders: {
                            'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                            'Content-Type': 'application/json'
                        }
                    })
                }
                else {
                    req = req.clone({
                        setHeaders: {
                            'Authorization': `Kinvey ${token}`
                        }
                    })
                }
        
                return next.handle(req)
                .pipe(tap((event: HttpEvent<any>) => {
                    if(event instanceof HttpResponse && req.url.endsWith('login')){
                        this.toastrService.success('Successfully logged in!', 'Success');
                    }
                }))
            })
        )
    }
}