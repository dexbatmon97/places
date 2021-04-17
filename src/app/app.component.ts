import { Component, getModuleFactory, OnInit } from '@angular/core';
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
  coor: any;
  service: any;
  selection:any;
  ratio: any;
  condition=false;
  title = 'mysolution';
  Querys: any;
  i:any;
  
  Package:any;
  Autocomplete:any;

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
    this.coor=this.la+","+this.le;
    console.log(this.service);
    console.log(this.appService.getPlaces());
    //console.log(this.appService.getPlaces(this.ratio,this.len,this.lat,this.service));
   // console.log(this.appService.getAll());

   this.appService.postPlaces(this.coor,this.service,this.ratio);
    this.appService.getAutocomplete()
    .subscribe((data) => { 
     console.log(data);
         this.Autocomplete=data;
        //aui se envia al coordenadas
     });

     this.appService.getCoordinates()
    .subscribe((data) => { 

      ///de aqui se envia al places 
      //geometry.location.lat
      //geometry.location.lng
     console.log(data);
     });

    this.appService.getPlaces()
    // clone the data object, using its known Config shape
    .subscribe((data) => { 
      
      this.Package=data;
      console.log("retrieves");
     });


     

    


  }



}

// export interface Config {
//   name: string;
 
// }

