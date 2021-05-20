import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MaterialModule} from './module.material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AgmCoreModule } from '@agm/core';
import { TablebaseComponent } from './tablebase/tablebase.component';
import { PlacesComponent } from './places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    TablebaseComponent,
    PlacesComponent,  
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    AgmCoreModule.forRoot({
      apiKey: 'mykey'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
