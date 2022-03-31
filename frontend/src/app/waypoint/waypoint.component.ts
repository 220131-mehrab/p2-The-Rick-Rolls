import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waypoint',
  templateUrl: './waypoint.component.html',
  styleUrls: ['./waypoint.component.css']
})
export class WaypointComponent implements OnInit {
  waypoint: Waypoint = {
    id: 1,
    x: 0,
    y: 0,
    userId: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
