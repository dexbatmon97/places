import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablebase',
  templateUrl: './tablebase.component.html',
  styleUrls: ['./tablebase.component.css'],
})
export class TablebaseComponent implements OnInit {
  public getvalue: any;
  public getall: any;
  newValue: any;
  service: any;
  condition = false;
  menu = false;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getvalue = '';

    this.localStorage.getAll().then((res) => {
      if (res) {
        this.getall = res;
        console.log(this.getall);
      }
    });
  }

  goToPage(pageName: String) {
    this.router.navigate([`${pageName}`]);
  }

  menuUpdate() {
    this.menu = true;
  }

 

  change(event: any) {
    this.newValue = event.target.value;
  }

  update(parameter: any, name: any, phone: any, address: any, website: any) {
      const id =name;
      console.log(this.newValue)
      console.log(1,name,phone,website,address)
    switch (parameter) {
      case 'phone':
        phone = this.newValue;
        break;

      case 'name':
        name = this.newValue;
        break;
      case 'website':
        website = this.newValue;
        break;
      case 'address':
        address = this.newValue;
        break;
    }

    this.localStorage
      .add(name, {
        name: name,
        address: address,
        phone: phone,
        website: website,
      })
      .then((res) => {
        if (res) {
          alert('update succesfully');
        }
      });

      this.menu=false;
      this.condition=false;
      
      console.log(2,name,phone,website,address)


      if(parameter=='name'){
        this.localStorage.delete(id).then((res) => {
          if (res) {
           
            this.getvalue = 'deleted succesfully';
          }
        });
      }
  }

  get() {
    let name = (<HTMLInputElement>document.getElementById('datavalue')).value;
    console.log(name);
    this.localStorage.get(name).then((res) => {
      if (res) {
        this.getvalue = res;
        console.log(this.getvalue);
        this.condition = true;
      }
    });
  }
}
