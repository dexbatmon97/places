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
  
  lat = -27.598591;
  lng = -48.519387;
  zoom=13;

  service: any;
  address:any;
  ratio: any;
  condition=false;
  title = 'mysolution';
  packages:any;
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
      this.packages=data;
      if(this.packages!=undefined){
        this.inicio=true;
     }
     console.log(this.inicio)
     
      });
      
     
   
  }

  


 


}
