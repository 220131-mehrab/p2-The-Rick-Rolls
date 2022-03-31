import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyMapComponent } from './my-map/my-map.component';
import { UserComponent } from './user/user.component';
import { WaypointComponent } from './waypoint/waypoint/waypoint.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMapComponent,
    UserComponent,
    WaypointComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
