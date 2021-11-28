import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SearchLocationByIpService} from "../../services/search-location-by-ip.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchLocByIpService: SearchLocationByIpService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    this.searchLocByIpService.getLocationOfUser(form.value.ip)
  }

}
