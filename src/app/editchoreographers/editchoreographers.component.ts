import { Component, OnInit } from '@angular/core';
import { DanceService } from '../dance.service';
import { Router } from '@angular/router';
import { ChoreographerModel } from 'src/model/ChoreographerModel';

@Component({
  selector: 'app-editchoreographers',
  templateUrl: './editchoreographers.component.html',
  styleUrls: ['./editchoreographers.component.css']
})
export class EditchoreographersComponent implements OnInit {

  choreo:ChoreographerModel;
  editedChoreo:ChoreographerModel=new ChoreographerModel();;
  constructor(private service:DanceService,private router:Router) {
    this.choreo=new ChoreographerModel();
    // this.editChoreos=new ChoreographerModel();
   }

  

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=false;
    (<HTMLDivElement>document.getElementById("userNav")).hidden=true;



  this.choreo= this.service.getSelectedChoreo();
  console.log(this.choreo)
  }

  editChoreos(choreo){
    this.service.updateChoreo(this.choreo).subscribe();
    alert("updated successfully")
    this.router.navigate(['/showchoreographer'])

  }

}
