import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { MyMapComponent } from './my-map/my-map.component';
import { UserComponent } from './user/user.component';
import { WaypointComponent } from './waypoint/waypoint.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';

import { FormsModule } from '@angular/forms';


/* 
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component'; 
*/


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserInterfaceComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
