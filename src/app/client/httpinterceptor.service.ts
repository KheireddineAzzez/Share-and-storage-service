import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable,Injector } from '@angular/core';
import { Observable, throwError, empty, Subject } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
/**
 *@description This service intercept the request
 */
@Injectable({
providedIn: 'root'
})

export class HttpinterceptorService implements HttpInterceptor {
constructor(private Inj:Injector,private router:Router) { }
auth_service=this.Inj.get(AuthServiceService)
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
  /**
   *   Handle the request
   */
let token=req.clone({
setHeaders:{
Authorization:`Bearer ${this.auth_service.get_token()}`
}
})
/**
 * // call next() and handle the response

 */
return next.handle(token).pipe(
catchError((error: HttpErrorResponse) => {
console.log(error);
if (error.status==401 || error.status==404|| error.status==403|| error.status==404)  {
this.auth_service.log_out()
this.router.navigate(['home'])
}
else if(error.status==406){
  this.router.navigate(['Error401'])
}
else{
return next.handle(token)
}
})
)}
}
