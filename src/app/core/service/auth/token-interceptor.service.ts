import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorHandler } from '../api/error-handler';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    public errorHandler: ErrorHandler
  ) {}

  // Automatic set all infomation in headers
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        'access-token': localStorage.getItem('access-token') ? localStorage.getItem('access-token') : '',
        uid: localStorage.getItem('uid') ? localStorage.getItem('uid') : '',
        client: localStorage.getItem('client') ? localStorage.getItem('client') : '',
      })
    });

    return next.handle(authReq).pipe(
      tap((event: HttpEvent<any>) => {}, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errorHandler.handleError(err);
        }
      })
    );
  }
}
