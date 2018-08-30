import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class AuthService{
    private url: string;
    constructor(private http: HttpClient){
        this.url = "http://localhost:57554/api/auth/";
    }
    login(model: any){
        return this.http.post(this.url + 'login', model)
        .pipe(
            map((response: any) => {
                const user = response;
                localStorage.setItem('token', user.token)
            })
        )
    }
    register(model: any){
        return this.http.post(this.url + 'register', model);
    }
}