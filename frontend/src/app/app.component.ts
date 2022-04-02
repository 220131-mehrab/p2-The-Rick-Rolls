import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wayfinder';
  
  ngOnit() { 
    if (!navigator.geolocation) {
      console.log('sorry, we cant find you');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}` 
        + "this is your lat and long"
      );
    });
  }


  watchPosition() {
    
  }

}
