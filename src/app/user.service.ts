import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  public url:string = "https://tapzoserver.onrender.com/user"
  registerUser(user:any){
    return this._http.post<{message:string,user:any}>(this.url+'/register',user)
  }

  loginUser(loginInfo:any){
    return this._http.post<{message:string,user:any}>(this.url+'/login',loginInfo)
  }
}
