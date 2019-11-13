import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/model/login';
import { DanceService } from '../dance.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  userName;
  password;
  data;
  log: Login;
  type

  isUser;

  constructor(private router: Router, private service: DanceService) {
    this.log = new Login();
  }


  registrationPage() {
    this.router.navigate(['/userregistration'])
  }


  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;

  }
  onSubmit(loginform) {

    this.service.validateUserLogin(this.log.userName, this.log.password).subscribe((data) => {this.isUser = data
   
    console.log(this.log)
    if (this.isUser) {
      // sessionStorage.setItem('username', this.userName)
      this.service.validateLoginType(this.log.userName).subscribe((data) => {
        this.type = data[0];

        console.log(this.isUser)

        if (this.type == "user") {
          sessionStorage.setItem("userName",this.log.userName);
          sessionStorage.setItem("type","user")
          console.log(data);
          this.router.navigate(['/danceacademy'])
        }
        else if(this.type == "admin"){
          sessionStorage.setItem("adminName",this.log.userName);
          console.log(data);
          this.router.navigate(['/add'])
        }
        else {
          console.log(data);
          // this.router.navigate(['/add'])
        }

      });
    }
    else
      alert("invalid Credentials")
  });
  




  }

}
