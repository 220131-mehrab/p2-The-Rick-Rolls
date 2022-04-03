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

  constructor() { }
}
