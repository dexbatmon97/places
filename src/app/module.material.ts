import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';

@NgModule(
{
  imports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
  ]

}
)
export class MaterialModule{}