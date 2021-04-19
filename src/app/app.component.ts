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
  
    
  
  coor: any;
  service: any;
  selection:any;
  adress:any;
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
 
  ra(event : any) {
    this.ratio=event.target.value;
    console.log(this.ratio);
  }

  pla(event : any) {
    this.adress=event.target.value;
    console.log(this.adress);
   }
  

  search(){
    this.condition=!this.condition
    
    console.log(this.service);
    console.log(this.appService.getPlaces());

  // this.appService.postPlaces(this.coor,this.service,this.ratio);
     this.appService.postPlaces("se");

    this.appService.getAutocomplete()
    .subscribe((data) => { 
     console.log(data);
         this.Autocomplete=data;
        //revibo direcciones
     });

     this.appService.getCoordinates()
    .subscribe((data) => { 
      ///recibo coordenadas
      //this.co
      //geometry.location.lat
      //geometry.location.lng
     console.log(data);
     });

    this.appService.getPlaces()
    .subscribe((data) => { 
      this.Package=data;
      console.log("lista recibida");
     });
  }
}

