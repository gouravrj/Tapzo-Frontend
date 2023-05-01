import { Component,OnInit } from '@angular/core';
import { LenderService } from '../lender.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public message!:string
  public isError:boolean = false
  public isSuccess:boolean = false
  public username!:string
  public password!:string

  constructor(private _lenderservice:LenderService,private _router:Router){}
  ngOnInit(): void {

  }

  onLogin(){
    const loginInfo={
      username:this.username,
      password:this.password
    }
    this._lenderservice.loginLender(loginInfo).subscribe(response=>{
      this.message = response.message
      this.isError = false
      this.isSuccess = true
      localStorage.setItem('token',response.token)
      localStorage.setItem('userID',response.user.id)
      localStorage.setItem('userName',response.user.name)
      this._router.navigate(['/bike/list'])
    },err=>{
      this.message = err.error.message
      this.isError = true
      this.isSuccess = false
    })
  }
}
