import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AppService} from './app.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat: any;
  len: any;
  service: any;
  ratio: any;
  condition=false;
  title = 'mysolution';
  profile:any;
  

  constructor(
    private appService: AppService,
    private http: HttpClient,
  
    ){
  }
  
  ngOnInit(): void {
    console.log("holi");
  }
 
  le(event : any) {
    this.len=event.target.value;
    console.log(this.len);}

  la(event : any) {
    this.lat=event.target.value;
    console.log(this.lat);}

  ra(event : any) {
    this.ratio=event.target.value;
    console.log(this.ratio);}

  search(){
    this.condition=!this.condition
    console.log(this.service);
    console.log(this.appService.getPlaces());
    //console.log(this.appService.getPlaces(this.ratio,this.len,this.lat,this.service));
   // console.log(this.appService.getAll());

   this.appService.getPlaces()
   // clone the data object, using its known Config shape
   .subscribe((data) => { 
    console.log(data);
    });
  }



}

// export interface Config {
//   name: string;
 
// }

