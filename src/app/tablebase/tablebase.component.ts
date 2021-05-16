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
  phones = [];
  websites = [];
  addresses = [];
  found = false;
  index: any;
  names = [];

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getvalue = '';
    this.localStorage.getAll().then((res) => {
      if (res) {
        this.getall = res;
        //console.log(this.getall);
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
    const id = name;
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

    this.menu = false;
    this.condition = false;

    if (parameter == 'name') {
      this.localStorage.delete(id).then((res) => {
        if (res) {
          this.getvalue = 'deleted succesfully';
        }
      });

      this.localStorage.getAll().then((res) => {
        if (res) {
          this.getall = res;
        }
      });
    }
  }

  get(parameter: any) {
    for (const i in this.getall) {
      // console.log(`${i}: ${this.getall[i].phone}`);
      this.phones[i] = this.getall[i].phone;
      this.websites[i] = this.getall[i].website;
      this.addresses[i] = this.getall[i].address;
      this.names[i] = this.getall[i].name;
    }

    let name = (<HTMLInputElement>document.getElementById('datavalue')).value;

    console.log(this.addresses);
    switch (parameter) {
      case 'phone':
        console.log('entro');
        for (const j in this.getall) {
          if (name == this.phones[j]) {
            this.found = true;
            this.index = j;
          }
        }
        break;
      case 'website':
        for (const k in this.getall) {
          if (name == this.websites[k]) {
            this.found = true;
            this.index = k;
          }
        }
        break;
      case 'address':
        for (const r in this.getall) {
          if (name == this.addresses[r] || this.addresses[r].includes(name)) {
            this.found = true;
            this.index = r;
          }
        }
        break;
    }

    if (this.found == true) {
      name = this.getall[this.index].name;
      this.found = false;
    }

    this.localStorage.get(name).then((res) => {
      if (res) {
        this.getvalue = res;
        this.condition = true;
      }
    });
  }
}
