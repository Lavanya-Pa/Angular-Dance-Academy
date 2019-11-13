import { Component } from '@angular/core';
import { DanceacademyComponent } from './danceacademy/danceacademy.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dance-academy';
constructor(private router:Router){

}
ngOnInIt(){

}
logOut() {
  console.log("Logout")
  sessionStorage.removeItem("userName");
  sessionStorage.removeItem("type");
  this.router.navigate(['/loginpage'])
}

}
