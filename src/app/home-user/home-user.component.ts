import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service';


@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  public bikeData:any[]=[]
  constructor(private _bs:BikeService){}

  ngOnInit(): void {
    this._bs.listAllBikes().subscribe(response=>{
      this.bikeData = response.bikes
    },err=>{
      console.log(err)
    })
  }
}
