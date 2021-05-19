import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardRole implements CanActivateChild {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log(route);
    var roles: string[] = JSON.parse(localStorage.getItem('ROLE'));

    let roleCheck = false;

    if (JSON.stringify(roles) === JSON.stringify(this.authenticationService.getRole())) {
      roleCheck = true;
    }
    return roleCheck;
  }
}
