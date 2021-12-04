import {Component, Input} from '@angular/core';

import {UserLocation} from "../../models/location";
import {SearchLocationByIpService} from "../../services/search-location-by-ip.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  coords!: UserLocation;

  constructor(
    private searchLocByIpService: SearchLocationByIpService
  ) {
    this.searchLocByIpService.getLocationOfUser().subscribe(loc => {
      this.coords = loc;
    })
  }

  getCoords(ip: string): void {
    this.searchLocByIpService.getLocationOfUser(ip).subscribe(loc => {
      this.coords = loc;
    })
  }
}
