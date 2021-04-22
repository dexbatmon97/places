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
  
  coor: any;
  service: any;
  selection:any;
  address:any;
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
      });
  }

  onScroll() {
    console.log('scrolled!!');
  }


}
