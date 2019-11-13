import { Component, OnInit } from '@angular/core';
import { Dance } from 'src/model/dance';
import {Location} from 'src/model/Location';
import { Router } from '@angular/router';
import { ChoreographerModel } from 'src/model/ChoreographerModel';
import { DanceService } from '../dance.service';
import { Booking } from 'src/model/Booking';

@Component({
  selector: 'app-danceacademy',
  templateUrl: './danceacademy.component.html',
  styleUrls: ['./danceacademy.component.css']
})
export class DanceacademyComponent implements OnInit {
  location;
  dance:Dance

  booking:Booking;

choreographers:ChoreographerModel[]=[];

  constructor(private router: Router,private service:DanceService) {
    // this.location = new Location();
    this.dance = new Dance();
    this.booking=new Booking();
   }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;


    
  }
  locationfn(method){
    alert("Booking Successfull")
  }
  dancefn(method){
    alert("Booking Successfull")
  }
  logOut() {
    console.log("Logout")
    sessionStorage.removeItem("userName");
    this.router.navigate(['/loginpage'])
  }

  getLocations(location)
  {
    this.service.getLocation(location).subscribe(data=>this.choreographers=data);
    console.log(this.choreographers)
  }


  addBookings(){
    console.log(sessionStorage.getItem("userName"));
    this.booking.userName=sessionStorage.getItem("userName");
    console.log("add")
    console.log(this.booking)
    this.service.addBookings(this.booking).subscribe();
    this.router.navigate(['showbookings']);
   
  }

}
