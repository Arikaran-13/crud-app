import { Component } from "@angular/core";
import { User } from "src/Models/user";
import { UserService } from "src/user.service";

@Component({
    selector: "user-app",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"]
})
export class UserComponent{

    users:User[];

    constructor(private userService:UserService){

    }
    
    public onClick(){
    this.userService.getAllUsers().subscribe(
        (data:User[])=>{
            this.users = data;
        },
        (error)=>{
            console.log(error);
        }
      )
    }

}