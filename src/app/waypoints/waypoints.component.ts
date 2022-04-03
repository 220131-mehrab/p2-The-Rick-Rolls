import { Component, OnInit } from '@angular/core';
import { Waypoint } from './waypoint';

 
@Component({
  selector: 'app-waypoints',
  templateUrl: './waypoints.component.html',
  styleUrls: ['./waypoints.component.css']
})
export class WaypointsComponent implements OnInit {

  waypoint: Waypoint = {
    id: 1,
    name: 'Tucson',
    lat: 0,
    lon: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
