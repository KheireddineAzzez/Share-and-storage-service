import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomewatchGuard implements CanActivate {
  constructor(private router :Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if( localStorage.getItem('Token')){
        this.router.navigate(['Userprofile/Files/acceuil'])
        return false
    }
    else{

          return true
    }  }



}
