import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./Models/user";

@Injectable({
    providedIn: "root"
})
export class UserService{
    
  baseUrl:string = "http://localhost:8081/user";

  constructor(private http:HttpClient){

  }

  public getUserById(userId:number):Observable<User>{
    return this.http.get<User>(this.baseUrl.concat("/1"));
  }

  public registerUser(user:User):Observable<User>{
      return this.http.post<User>(this.baseUrl.concat("/register"),user);
  }

  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl.concat("/all"));
  }
}