import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mysolution';

  ngOnInit(): void {
  }

  /*mounted(){
    new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    )
  }
*/
}
