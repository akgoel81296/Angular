import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  displayDate()
  {
    let currentDate =  new Date();
    return currentDate;
  }

  displaylogs(stringmsg: String)
  {
    console.log("the message is  " + stringmsg);
  }

  //private finaldata = [];
   private apiurl = "http://jsonplaceholder.typicode.com/users";
   
   getData() {
      return this.http.get(this.apiurl);
   }

}
