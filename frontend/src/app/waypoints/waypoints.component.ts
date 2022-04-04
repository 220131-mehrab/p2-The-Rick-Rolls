import { Component, OnInit } from '@angular/core';
import { Waypoint } from '../waypoint';
import { WAYPTS } from '../mock-waypts';
import { WayptService } from '../waypt.service';
@Component({
  selector: 'app-waypoints',
  templateUrl: './waypoints.component.html',
  styleUrls: ['./waypoints.component.css']
})
export class WaypointsComponent implements OnInit {

  waypoints?: Waypoint[];
  selectedWaypoint?: Waypoint;

  constructor(private waypointService: WayptService) { }

  ngOnInit(): void {
    this.waypointService.getWaypoints().subscribe(wps => this.waypoints = wps);
  }

  reloadWaypoints(): void {
    this.waypointService.getWaypoints().subscribe(wps => this.waypoints = wps);
  }

  onSelect(waypoint: Waypoint): void {
    this.selectedWaypoint = waypoint;
  }

}
