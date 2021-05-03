import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  getAddress(address:String,radious:String) {
    return this.http.get("http://localhost:3001/address/"+address+"/radious/"+radious);
  }
}

