import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


//ng g guard services/incomplete

@Injectable({
  providedIn: 'root'
})
export class IncompleteGuard implements CanDeactivate<unknown> {

  public static canLeave: boolean = true;


  canDeactivate(): boolean {
    if (!IncompleteGuard.canLeave) {
      IncompleteGuard.canLeave = window.confirm("you didn't fill out all fields.\nSure wanna leave?");
    }
    return IncompleteGuard.canLeave;
  }

}
