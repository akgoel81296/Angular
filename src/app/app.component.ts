import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  //private apiurl = "http://jsonplaceholder.typicode.com/users";
  currentDate : Date;
  public personalData=[];
  constructor(private service:MyserviceService,private http:HttpClient){}

  ngOnInit(){
    this.currentDate=this.service.displayDate();
      
   this.service.getData().subscribe((data)=>{
       this.personalData=Array.from(Object.keys(data),k=>data[k])
       console.log(this.personalData);
   });


  //  this.http.get(this.apiurl).subscribe((data)=>{
  //   this.personalData=Array.from(Object.keys(data),k=>data[k])
  //   console.log(this.personalData);});
  


  }

   


}
