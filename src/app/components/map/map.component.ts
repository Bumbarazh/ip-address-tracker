import {
  Component,
  AfterViewInit,
  Input
} from '@angular/core';

// @ts-ignore
import * as L from "leaflet";
import {UserLocation} from "../../models/location";

const iconDefault = L.icon({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input()
  coords!: UserLocation;
  private map: any;

  private initMap(): void {
    this.map = L.map(`map`, {
      center: [ this.coords.location.lat,  this.coords.location.lng ],
      zoom: 16
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    L.marker([ this.coords.location.lat,  this.coords.location.lng ], {icon: iconDefault}).addTo(this.map);
    tiles.addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

}
