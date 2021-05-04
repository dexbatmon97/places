import { Component, OnInit } from '@angular/core';
import { AppService} from './app.service';
import { HttpClient } from '@angular/common/http';
import 'lodash';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public getvalue: any;
  lat = -27.598591;
  lng = -48.519387;
  zoom=14;

  service: any;
  address:any;
  ratio: any;
  condition=false;
  loading=false;
  title = 'mysolution';
  packages:any;
  inicio=false;



  constructor(
    private appService: AppService,
    private http: HttpClient,
    private localStorage: LocalStorageService,

    ){
      
  }
  
  ngOnInit(): void {
    console.log(this.inicio)
    this.condition=false;
  }
 
  ra(event : any) {
    this.ratio=event.target.value;
  }

  pla(event : any) {
    this.address=event.target.value;
   }

  add(){
    let txtvalue = (<HTMLInputElement>document.getElementById("txtvalue")).value;
    console.log(txtvalue)
    this.localStorage.add("myname", txtvalue).then( res=>{
      if(res){
         alert("inserted succesfully")
      }
    })
  }

  delete(){

  }

  get(){
    this.localStorage.get("myname").then(res=>{
      if(res){
        this.getvalue=res;
     }
    })
  }

  search(){
    this.inicio==false;
    this.condition=true;
     if(this.condition==true){ this.loading=true;}

     this.appService.getAddress(this.address,this.ratio)
     .subscribe((data) => { 
      console.log(data);
      this.packages=data;
      if(this.packages!=undefined){
        this.inicio=true;
     }
     if(this.inicio==true){ 
       this.loading=false;
      this.condition=false;
      }     
      });
      
  }

}
