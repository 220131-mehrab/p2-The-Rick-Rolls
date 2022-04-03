import { Component, OnInit } from '@angular/core';
import { Waypoint } from '../waypoint';
import { WAYPTS } from '../mock-waypts';
@Component({
  selector: 'app-waypoints',
  templateUrl: './waypoints.component.html',
  styleUrls: ['./waypoints.component.css']
})
export class WaypointsComponent implements OnInit {

  waypoints = WAYPTS;
  selectedWaypoint?: Waypoint;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(waypoint: Waypoint): void {
    this.selectedWaypoint = waypoint;
  }

}
