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

  getAutocomplete() {
    return this.http.get("http://localhost:3001/autocomplete");
  }

  getCoordinates() {
    return this.http.get("http://localhost:3001/coordinates");
  }

 // postPlaces(co:String,se:String,ra:String) {
  postPlaces(co:String) {

    // this.http.post("http://localhost:3001/placesinfo","yy").toPromise().then((data:any) => {
    //     console.log(data);
    //   });

    return this.http.post("http://localhost:3001/placesinfo","yy");
    

    //
   // return this.http.post("http://localhost:3001/placesinfo",{co,se,ra});
  }


 
}

