import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<any>{
        return next.handle(req).pipe(
            catchError(error => {
                if(error instanceof HttpErrorResponse){
                    //checks if error is 401 error 
                    if(error.status === 401){
                        return throwError(error.statusText);
                    }
                    //checking if error is application-error
                    const applicationError = error.headers.get('Application-Error');
                    if(applicationError){
                        return throwError(applicationError);
                    }
                    const serverError = error.error;
                    let modelStateError = '';
                    if(serverError && typeof serverError === 'object'){
                        for(const key in serverError){
                            if(serverError[key]){
                                modelStateError += serverError[key] + '\n';
                            }
                        }
                    }
                    return throwError(modelStateError || serverError || 'Server Error');
                }
            })
        )
    }
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}