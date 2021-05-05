import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablebaseComponent } from '../app/tablebase/tablebase.component';

const routes: Routes = [
  {path: 'Tablebase' , component:TablebaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
