import { Component, OnInit } from '@angular/core';
//import { on } from 'events';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Waypoint }from './waypoint';


//makes L layer a global js variable
declare const L: any;
//fix for leaflet icon marker bug
import { icon, Marker } from 'leaflet';
//import { Waypoint } from './waypoint';
import { WayptService } from './waypt.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;
//end leaflet bug fix


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wayfinder';
  mylat = 0;
  mylon = 0;
  firsttime = true;
  wpt: Waypoint = {
    id: undefined,
    name: 'name',
    lat: 0,
    long: 0};
  waypointurl = "/waypoint";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  //constructor(private waypointService: WayptService) {

  }

  ngOnInit(): void {
      this.getPosEvent(this.firsttime);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  getPosEvent(firsttime: boolean) {
    
    console.log("I'm stating the event.")
    if (!navigator.geolocation) {
      console.log('sorry, cant find you!');
    }else{
      navigator.geolocation.getCurrentPosition((position) => {
        //simplifies coords
        const coords = position.coords;
        const latLong = [coords.latitude, coords.longitude];

        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        this.mylat = position.coords.latitude;
        this.mylon = position.coords.longitude;
        this.wpt = {id: undefined,name: 'name',lat: position.coords.latitude, long: position.coords.longitude };

        this.http.post<Waypoint>(this.waypointurl, this.wpt, this.httpOptions).pipe(
          tap((newWpt: Waypoint) => console.log(`added hero w/ id=${newWpt.id}`)),
          catchError(this.handleError<Waypoint>('addHero')));

  /*       // Carlos working off brian's/kevin's code ==========================================================
        let waypointName: string = (document.getElementById('waypointName') as HTMLInputElement).value;

        let newWaypoint: Waypoint = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          id: undefined,
          name: waypointName
        };

        console.log(newWaypoint);

        this.waypointService.addWaypoint(newWaypoint);

        //===================================================================================================
 */
        this.mylat = position.coords.latitude;
        this.mylon = position.coords.longitude;

        //if (L.map()){console.log(`first time`);}
        //adding leaflet map canvas to map div
        if (firsttime){
          let map = L.map('map').setView(latLong, 4);
          console.log("After");
          firsttime = false;
        
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
        }       //add popup
        // marker.bindPopup('<b>Brian lives here</b>')
      //   let popup = L.popup()
      // .setLatLng(latLong)
      // .setContent("Waypoint One")
      // .openOn(map);
      });
    }
    //this.watchPosition();
  }


  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
      `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      
      if (position.coords.latitude === desLat) {
        console.log(`clearing watch.`);
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

 
