import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
    @Output() cancelRegister: EventEmitter<boolean>= new EventEmitter();
    model:any = {};
    constructor(private authService: AuthService){ }

    ngOnInit(){

    }
    register(){
       this.authService.register(this.model)
       .subscribe(() => {
            console.log("success");
       }, error => {
            console.log(error);
       });
    }
    cancel(){
        this.cancelRegister.emit(false);
    }
}