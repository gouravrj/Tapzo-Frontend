import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _bikeService:BikeService){}

  public bikeData:any[]=[]

  ngOnInit(): void {
    this._bikeService.listAllBikes().subscribe(response=>{
      console.log(response)
      this.bikeData = response.bikes
    },err=>console.log(err))
  }
}
