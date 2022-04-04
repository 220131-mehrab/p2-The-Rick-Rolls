import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaypointsComponent } from './waypoints/waypoints.component';
import { WayptDetailComponent } from './waypt-detail/waypt-detail.component';
import { CheckinDetailComponent } from './checkin-detail/checkin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WaypointsComponent,
    WayptDetailComponent,
    CheckinDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
