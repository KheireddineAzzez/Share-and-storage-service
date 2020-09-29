import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Observer, Subscriber, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client'
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  sockte:any
  constructor(private http:HttpClient,private router:Router){
     this.sockte=io('http://localhost:3000')
  }
  Verify:Observable<boolean>=Observable.create((obser:Observer<boolean>)=>{

    setInterval((  )=>{
   if( localStorage.getItem('Token')){
       return true
   }
   else{
         return false
   }
    },1)

  })

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if( localStorage.getItem('Token')){
      return true
  }
  else{
    this.router.navigate(['home'])

        return false
  }  }

}



