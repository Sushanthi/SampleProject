import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class AuthService{
    private url: string;
    jwtHelper = new JwtHelperService;
    decodedToken: any;
    constructor(private http: HttpClient){
        this.url = "http://localhost:57554/api/auth/";
    }
    login(model: any){
        return this.http.post(this.url + 'login', model)
        .pipe(
            map((response: any) => {
                const user = response;
                localStorage.setItem('token', user.token)
                this.decodedToken = this.jwtHelper.decodeToken(user.token);
                console.log(this.decodedToken);
            })
        )
    }
    register(model: any){
        return this.http.post(this.url + 'register', model);
    }
    loggedIn(){
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
}