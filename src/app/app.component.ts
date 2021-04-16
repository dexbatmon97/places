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
  Querys: any;
  Adress=[];
  Number=[];
  Name = []; 
  Url=[];
  Website=[];
  i:any;
  package:any;
  

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
      this.package=data;
      console.log("retrieves");
      for (this.i in data) {

       this.Name[this.i]=this.package[this.i].name
       this.Adress[this.i]=this.package[this.i].formatted_address
       this.Number[this.i]=this.package[this.i].international_phone_number
       this.Url[this.i]=this.package[this.i].url
       this.Website[this.i]=this.package[this.i].website
     }

     console.log(this.Name)
     console.log(this.Adress)
     console.log(this.Number)
     console.log(this.Url)
     console.log(this.Website)
     });


     

    


  }



}

// export interface Config {
//   name: string;
 
// }

