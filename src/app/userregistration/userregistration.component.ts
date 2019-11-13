import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/model/registration';
import { Router } from '@angular/router';
import { DanceService } from '../dance.service';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  registration:Registration;

  constructor(private router: Router,private service:DanceService) {
    this.registration=new Registration();
   }
   
  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;

  }

  onSubmit(loginform){

    console.log(this.registration)
    this.service.registerUser(this.registration).subscribe();
    console.log("registr    ")
    this.router.navigate(['/danceacademy'])
  }

}
