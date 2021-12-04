import { Component, OnInit } from '@angular/core';
// import {SearchLocationByIpService} from "../../services/search-location-by-ip.service";
// import {UserLocation} from "../../models/location";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // coords!: UserLocation;

  constructor(
    // private searchLocByIpService: SearchLocationByIpService
  ) {
    // this.searchLocByIpService.getLocationOfUser().subscribe(loc => {
    //   this.coords = loc;
    // })
  }

  ngOnInit(): void {
  }

}
