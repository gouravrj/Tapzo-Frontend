import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public is_show:boolean = true
  public uname!:string
  constructor(private router:Router){}
  ngOnInit(): void {

    if(localStorage.getItem('token')){
      this.is_show = false
      this.uname = localStorage.getItem('userName') as string
    }
    else{
      this.is_show = true
    }
    if(localStorage.getItem('userID')){
      this.is_show = false
      this.uname = localStorage.getItem('userName') as string
    }
    else{
      this.is_show = true
    }
  }



  onLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userID')
    this.router.navigate(['/']) //Have to include Router and inject it to Constructor
  }
}
