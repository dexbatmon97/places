import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private http: HttpClient) { }

  // getPlaces(r,le,la,s) {
  //   console.log(r,le,la,s)
  //   return this.http.get(""http://localhost:3001/places");
  // }

  getPlaces() {
    return this.http.get("http://localhost:3001/places");
  }


  // getAll(){
  //   fetch("http://localhost:3001/places")
  // .then(response => response.json())
  // .then(data => console.log(data));
  // }
  
}

