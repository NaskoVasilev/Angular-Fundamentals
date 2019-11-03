import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationInterceptorService implements HttpInterceptor {
  constructor(private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((httpEvent) => {
      if(httpEvent instanceof HttpResponse){
        let successMessage = httpEvent.body.message;
        if(successMessage){
          this.toastr.success(successMessage, 'Success');
        }
      }
    }),
    catchError(error => {
      let errorMessage = error.error.message;
      if(errorMessage){
        this.toastr.error(errorMessage, 'Error');
      }
      throw error;
    })
  )};
}
