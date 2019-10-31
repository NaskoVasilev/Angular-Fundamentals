import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;

export class AppHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('AUTH_TOKEN');
        let headers = { 'Content-Type': 'application/json' }
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return next.handle(req.clone({
            url: `${apiUrl}/${req.url}`,
            setHeaders: headers
        }));
    }

}