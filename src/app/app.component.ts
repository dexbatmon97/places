import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat: any;
  condition=false;
  title = 'mysolution';
  public createTicketDisabled: boolean = true;

  ngOnInit(): void {
    console.log("holi");

  
  }
  
  change(event : any) {
    this.lat=event.target.value;
    console.log(this.lat);}
  
  
 
  
  
  
  search(){
    this.condition=!this.condition
    //aqui va a hacer un HTTP post?
     // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&keyword=cruise&key=AIzaSyAVeX4jmQihj8faM-t2uvAGJgILXymB_Rc
  }

  /*
  mounted(){
    const directionsService = new google.maps.DirectionsService(); 

    new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    )
  }*/

}
