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

  postPlaces(co:String,se:String,ra:String) {
    return this.http.post("http://localhost:3001/placesinfo",{co,se,ra});
  }


 
}

