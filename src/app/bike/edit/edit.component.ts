import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bike } from 'src/app/bike'
import { BikeService } from 'src/app/bike.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  public bikeID!:string
  public bike = new Bike('','','','','',false,'')
  public message!:string
  public isSuccess:boolean = false;
  public isError:boolean = false;

  constructor(private _bs:BikeService,private _acroute:ActivatedRoute){}
  ngOnInit(): void {
    //Grabbing the Post_ID when the component starts loading
    this.bikeID = this._acroute.snapshot.paramMap.get('id') as string

    this._bs.getBikeByID(this.bikeID).subscribe(rs=>{
      console.log(rs)
      this.bikeID = rs.bikes._id
      this.bike.lid = rs.bikes.lenderId
      this.bike.bname = rs.bikes.bikeName
      this.bike.bdesc = rs.bikes.bikeDesc
      this.bike.phour = rs.bikes.priceHour
      this.bike.pday = rs.bikes.priceDay
      this.bike.booked = rs.bikes.bookedStatus
      this.bike.bikeimgurl = rs.bikes.bikeImgUrl
    },err=>{
      console.log(err)
    })
  }
  onSubmitBike(){
    console.log(this.bike)
    this._bs.updateBike(this.bikeID,this.bike).subscribe(rs=>{
      this.message = rs.message
      this.isError = false;
      this.isSuccess = true;
    },err=>{
      this.message = err.error.message
      this.isError = true
      this.isSuccess = false
    })
  }


}
