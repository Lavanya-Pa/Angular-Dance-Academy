import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=false;
    (<HTMLDivElement>document.getElementById("userNav")).hidden=true;


  }

}
