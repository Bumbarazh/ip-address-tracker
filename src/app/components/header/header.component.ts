import {Component, Input} from '@angular/core';

import {UserLocation} from "../../models/location";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  coords!: UserLocation;

  constructor() { }

}
