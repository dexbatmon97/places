import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private http: HttpClient) { }

  

  getPlaces() {
    return this.http.get("http://localhost:3001/places");
  }

  

  getAddress(address:String,service:String,radious:String) {
    return this.http.get("http://localhost:3001/address/"+address+"/service/"+service+"/radious/"+radious);

  }


 
}

