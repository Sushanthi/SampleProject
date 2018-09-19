import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router, private alretify:AlertifyService){

  }
  canActivate():  boolean {
    if(this.authService.loggedIn()){
      return true;
    }

    this.alretify.error('You have not logged in');
    this.router.navigate(['/home']);
    return false;
  }
}
