import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule(
{
  imports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    ScrollingModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    ScrollingModule
  ]

}
)
export class MaterialModule{}