import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablebaseComponent } from '../app/tablebase/tablebase.component';
import { PlacesComponent } from '../app/places/places.component';

const routes: Routes = [
  {path: 'Tablebase' , component:TablebaseComponent},
  {path: 'Places' , component:PlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
