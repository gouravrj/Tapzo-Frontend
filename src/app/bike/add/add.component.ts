import { Component,OnInit } from '@angular/core';
import { Bike } from 'src/app/bike';
import { BikeService } from 'src/app/bike.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{


  public bike = new Bike('','','','','',false,'')
  public message!:string
  public isError:boolean = false
  public isSuccess:boolean = false


  constructor(private _bikeService:BikeService){}
  ngOnInit(): void {
    this.bike.lid = localStorage.getItem('userID') as string
  }

  onSubmitForm(){
    this._bikeService.registerBike(this.bike).subscribe(rs=>{
      this.message = rs.message
      this.isError = false;
      this.isSuccess = true;
    },err=>{
      console.log(err)
      this.message = err.error.message
      this.isSuccess = false
      this.isError = true
      console.log(this.bike)
    })
  }
}
