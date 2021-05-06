import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
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
  }

  ra(event: any) {
    this.ratio = event.target.value;
  }

  pla(event: any) {
    this.address = event.target.value;
  }

  goToPage(pageName:String){
    this.router.navigate([`${pageName}`]);

  }

  add(name: any, phone: any, address: any, website: any) {
    this.localStorage.add(name, { name:name, address: address,phone:phone, website:website }).then((res) => {
      if (res) {
        alert('inserted succesfully');
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
      
      this.packages = data;
      console.log(this.packages);
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
