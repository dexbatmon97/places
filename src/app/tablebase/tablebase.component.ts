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
  condition = false;

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

  get() {

    let name = (<HTMLInputElement>document.getElementById('datavalue')).value;
    console.log(name);
    this.localStorage.get(name).then((res) => {
      if (res) {
        this.getvalue = res;
        console.log(this.getvalue);
        this.condition=true;
      }
    });
  }
}
