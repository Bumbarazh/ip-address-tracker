import {Component, Input, OnInit} from '@angular/core';
import {UserLocation} from "../../models/location";

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent implements OnInit {
  @Input()
  coords!: UserLocation;

  constructor() { }

  ngOnInit(): void {}

}
