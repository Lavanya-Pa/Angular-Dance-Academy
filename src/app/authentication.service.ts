import { Injectable } from '@angular/core';
import { AuthUsertypeService } from './auth-usertype.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private router: Router,
    private authusertypeservice: AuthUsertypeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authusertypeservice.isUserLoggedIn())
      return true;
    else {
      this.router.navigate(['/loginpage']);
      console.log("qwert...................")
      return false;
    }


  }
}
