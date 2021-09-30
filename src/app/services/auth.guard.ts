import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import store from '../redux/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean{
    if(store.getState().authState.user) return true;
    console.log("you are note logged-in....");
    this.router.navigateByUrl("/login");
    return false;
  }


  constructor(private router:Router){ }
}
