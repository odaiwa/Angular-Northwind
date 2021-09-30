import { NotifyService } from './notify.service';
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
    this.notify.error("you are not logged-in....");
    this.router.navigateByUrl("/login");
    return false;
  }


  constructor(private router:Router,private notify:NotifyService){ }
}
