import { Component, OnInit, Input } from '@angular/core';
import { Waypoint } from '../waypoint';
@Component({
  selector: 'app-waypt-detail',
  templateUrl: './waypt-detail.component.html',
  styleUrls: ['./waypt-detail.component.css']
})
export class WayptDetailComponent implements OnInit {

  @Input() waypoint?: Waypoint;
  
  constructor() { }

  ngOnInit(): void {
  }

}
