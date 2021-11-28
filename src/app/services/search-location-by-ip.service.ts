import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {UserLocation} from "../models/location";

@Injectable({
  providedIn: 'root'
})
export class SearchLocationByIpService {

  constructor(private http: HttpClient) {
  }

  getLocationOfUser(ip?: string): Observable<UserLocation>{
    if (!ip) {
      return this.http.get<UserLocation>('https://geo.ipify.org/api/v2/country,city?apiKey=at_iYzla0BJbWWycjFsZtbuSd8SspCjo');
    } else {
      return this.http.get<UserLocation>(`https://geo.ipify.org/api/v2/country,city?apiKey=at_iYzla0BJbWWycjFsZtbuSd8SspCjo&ipAddress=${ip}`);
    }
  }
}
