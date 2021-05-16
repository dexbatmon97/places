import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'lodash';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public getvalue: any;
  lat = -27.598591;
  lng = -48.519387;
  zoom = 14;

  service: any;
  address: any;
  ratio: any;
  condition = false;
  loading = false;
  title = 'mysolution';
  packages: any;
  inicio = false;

  constructor(
    private appService: AppService,
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log(this.inicio);
    this.condition = false;
    this.getvalue = ''

    this.localStorage.iniciarIndexedDb();
  }

  ra(event: any) {
    this.ratio = event.target.value;
  }

  pla(event: any) {
    this.address = event.target.value;
  }

  goToPage(pageName:String){
    this.router.navigate([`${pageName}`]);
    this.inicio = false;

  }

  add(name: any, phone: any, address: any, website: any) {
    this.localStorage.add(name, { name:name, address: address,phone:phone, website:website }).then((res) => {
      if (res) {
        //alert('inserted succesfully');
      }
    });
  }

  delete(name: any) {
    this.localStorage.delete(name).then((res) => {
      if (res) {
        alert('deleted');
        this.getvalue = 'deleted succesfully';
      }
    });
  }



  search() {
    this.inicio == false;
    this.condition = true;
    if (this.condition == true) {
      this.loading = true;
    }

    this.appService.getAddress(this.address, this.ratio).subscribe((data) => {
      console.log(data);
      this.packages = data;
      if (this.packages != undefined) {
        this.inicio = true;
      }
      if (this.inicio == true) {
        this.loading = false;
        this.condition = false;
      }
    });
  }
}
