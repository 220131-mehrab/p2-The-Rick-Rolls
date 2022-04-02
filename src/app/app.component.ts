import { Component, OnInit } from '@angular/core';

declare const L: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wayfinder';

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('sorry, cant find you!');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;

      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let map = L.map('map').setView([coords.latitude, coords.longitude], 4);
    });
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
      `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if (position.coords.latitude === desLat) {
        navigator.geolocation.clearWatch(id);
      }
  },(err) => {
    console.log(err);
  },{
    enableHighAccuracy: false,
    timeout: 5000,
    //set to 0 so device cant return cached postion
    maximumAge: 0
  })
}
}
