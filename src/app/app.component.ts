import { Component, OnInit } from '@angular/core';
//makes L layer a global js variable
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
      //simplifies coords
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];

      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      //adding leaflet map canvas to map div
      let map = L.map('map').setView(latLong, 4);
      //adds map layer to leaflet canvas, include access token here
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnJpYW4xMzQ4IiwiYSI6ImNrNzlqcjl3NjB1MHkzZG10bjBscnp4NmgifQ.vieWJC5E5Odyimr9smQaIQ', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token'
      }).addTo(map);
      //marker 
      let marker = L.marker(latLong).addTo(map);
      //add popup
      marker.bindPopup('<b>Brian lives here</b>')

      let popup = L.popup()
    .setLatLng(latLong)
    .setContent("Waypoint One")
    .openOn(map);
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
