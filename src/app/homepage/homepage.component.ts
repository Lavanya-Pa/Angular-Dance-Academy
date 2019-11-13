import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }
  loginPage(){
    this.router.navigate(['/loginpage'])
  }
  registrationPage(){
    this.router.navigate(['/userregistration'])
  }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;


  }

}
