import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newCmpTitle="Hello new-cmp";

  title = 'Angular 7 Project!'; 
  todaydate:Date; 
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
     "Sept", "Oct", "Nov", "Dec"];


  constructor(private service: MyserviceService) { }

  ngOnInit() {

        this.todaydate=this.service.displayDate();
  }

}
