import { Component, OnInit } from '@angular/core';
import { ChoreographerModel } from 'src/model/ChoreographerModel';
import { Router } from '@angular/router';
import { DanceService } from '../dance.service';

@Component({
  selector: 'app-addchoreographer',
  templateUrl: './addchoreographer.component.html',
  styleUrls: ['./addchoreographer.component.css']
})
export class AddchoreographerComponent implements OnInit {
  choreo:ChoreographerModel;

  constructor(private router: Router,private service:DanceService) { 
    this.choreo =new ChoreographerModel();
  }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("userNav")).hidden=true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=false;

  }
  onSubmit(choreoForm){
    // this.service.insertChoreo(this.choreo);
    this.router.navigate(['showchoreographer']);

    console.log(this.choreo)
    this.service.addChoreo(this.choreo).subscribe();
    console.log("choreographers    ")
    this.router.navigate(['/showchoreographer'])
    
   }

}
