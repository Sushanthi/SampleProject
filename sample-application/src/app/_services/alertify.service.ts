import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
    providedIn: 'root'
})
export class AlertifyService {
    constructor(){

    }
    confirm(message: string, okCallback: () => any){
        alertify.confirm(message, function(e) {
            //e is user clicking on ok, click event
            if(e){
                okCallback(); //function which defines what happens after user click ok
            }
            else{

            }
        })
    }
    success(message: string){
        alertify.success(message);
    }
    error(message: string){
        alertify.error(message);
    }
    warning(message: string){
        alertify.warning(message);
    }
    message(message: string){
        alertify.message(message);
    }
}