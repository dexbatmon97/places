import { Component, OnInit } from '@angular/core';
import { AppService} from './app.service';
import { HttpClient } from '@angular/common/http';
import 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  lat = 51.678418;
  lng = 7.809007;

 

  service: any;
  address:any;
  ratio: any;
  condition=false;
  title = 'mysolution';
  Package:any;
  inicio=false;

  constructor(
    private appService: AppService,
    private http: HttpClient,
    ){
      
  }
  
  ngOnInit(): void {
    console.log(this.inicio)
  }
 
  ra(event : any) {
    this.ratio=event.target.value;
  }

  pla(event : any) {
    this.address=event.target.value;
   }

   
 

  search(){
    
    
    this.condition=!this.condition
     this.appService.getAddress(this.address,this.service,this.ratio)
     .subscribe((data) => { 
      console.log(data);
      this.Package=data;
      if(this.Package!=undefined){
        this.inicio=true;
     }
     console.log(this.inicio)
      });
      
     
   
  }

  


 


}
