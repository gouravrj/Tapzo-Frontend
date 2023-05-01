import { Component,OnInit } from '@angular/core';
import { Lender } from '../lender';
import { LenderService } from '../lender.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public lender = new Lender('','','','','')
  public message!:string
  public isError:boolean = false
  public isSuccess:boolean = false

  constructor(private _lenderservice:LenderService){}
  ngOnInit(): void {

  }

  onSubmitForm(){
    this._lenderservice.registerLender(this.lender).subscribe(response=>{
      // console.log(response)
      this.message = response.message
      this.isSuccess = true;
      this.isError = false
    },err=>{
      // console.log(err)
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
    })
  }
}
