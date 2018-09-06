import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service'
import { AlertifyService } from '../_services/alertify.service';

@Component({
    selector: 'app-nav',
    templateUrl:'./nav.component.html',
    styleUrls: ['./nav.component.scss']
})

export class NavComponent {
    model: any = {};
    constructor(public authService: AuthService, private alertify: AlertifyService){

    }
    login(){
        this.authService.login(this.model)
        .subscribe(next => {
            this.alertify.success("logged in successfully");
        }, error => {
            console.log(error);
        })
    }
    loggedIn(){
        return this.authService.loggedIn();
    }
    logout(){
        localStorage.removeItem('token');
        console.log("logged out");
    }
}