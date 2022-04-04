import { Injectable } from '@angular/core';
import { WAYPTS } from './mock-waypts';
import { Waypoint } from './waypoint';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WayptService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getWaypoints(): Observable<Waypoint[]> {
    return this.http.get<Waypoint[]>('http://localhost:8081/waypoints');
  }

  addWaypoint(wp: Waypoint) {
    console.log("adding waypoint");
    return this.http.post('http://localhost:8081/waypoints', wp, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
