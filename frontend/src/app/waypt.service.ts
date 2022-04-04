import { Injectable } from '@angular/core';
import { WAYPTS } from './mock-waypts';
import { Waypoint } from './waypoint';

@Injectable({
  providedIn: 'root'
})
export class WayptService {
  getWaypoints(): Waypoint[] {
    return WAYPTS;
  }

<<<<<<< HEAD
=======
  addWaypoint(wp: Waypoint) {
    console.log("adding waypoint");
    WAYPTS.push(wp);
  }

>>>>>>> karlos
  constructor() { }
}
