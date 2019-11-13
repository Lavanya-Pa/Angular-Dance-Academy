import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/model/Booking';
import { Router } from '@angular/router';
import { DanceService } from '../dance.service';

@Component({
  selector: 'app-showbookings',
  templateUrl: './showbookings.component.html',
  styleUrls: ['./showbookings.component.css']
})
export class ShowbookingsComponent implements OnInit {
  // book: Booking[];
  booking: any=[];
// booking:Booking[]=[];
  userName: string;

  filterData;

  constructor(private router:Router,private Service:DanceService) {
   }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;


    this.userName=sessionStorage.getItem("userName");
    this.getUserBookings();
  }


  getUserBookings(){
    console.log(this.userName)
    this.Service.getUserBookings(this.userName).subscribe(data=>this.booking=data);

    console.log(this.booking)
  }
  deleteBookings(id) {
    var delet = confirm("Are you sure?")
    if (delet)
    console.log(id)
      this.Service.deleteBookings(id).subscribe();

  }

}
