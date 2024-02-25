import { Component, ElementRef, ViewChild } from "@angular/core";
import { User } from "src/Models/user";
import { UserService } from "src/user.service";

@Component({
    selector:"user-registration",
    templateUrl: "./user-registration.component.html",
    styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent{


    userName:string;
    email:string;
    age:number;


    constructor(private userService:UserService){
        
    }
  
    public onClick():void{
        console.log("on click submit");
        let user = new User(this.userName,this.email,this.age);
        this.userService.registerUser(user).subscribe(
            (data:User)=>{
               console.log(data);
            },
            (error)=>{
                console.log(error);
            }
            )
    }

    
}