import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service'

@Component({
    selector: 'app-nav',
    templateUrl:'./nav.component.html',
    styleUrls: ['./nav.component.scss']
})

export class NavComponent {
    model: any = {};
    constructor(private authService: AuthService){

    }
    login(){
        this.authService.login(this.model)
        .subscribe(next => {
            console.log("logged in successfully")
        }, error => {
            console.log(error);
        })
    }
    loggedIn(){
        const token = localStorage.getItem('token');
        return !!token; //if token has value returns true else returns false
    }
    logout(){
        localStorage.removeItem('token');
        console.log("logged out");
    }
}