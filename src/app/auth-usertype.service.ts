import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUsertypeService {

  constructor() { }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('userName')
    let type = sessionStorage.getItem('type')
    if (user != null && type == "user")
      return true;
    else
      return false;
  }

  // isAdminLoggedIn() {
  //   let user = sessionStorage.getItem('userName')
  //   let type = sessionStorage.getItem('type')
  //   console.log(type)
  //   console.log(!(user === null))
  //   return (!(user === null) && type=== 'Admin')
  // }

  logOut() {
    sessionStorage.removeItem('userName')
  }
}
