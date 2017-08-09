import { Component, OnInit } from '@angular/core';
import { Location } from "api/models/location";
import {Http} from "@angular/http";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  points: any[] = [];

  currentPosition: Location;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("assets/points.json").subscribe(data => {
      this.points = data.json();
    });
  }

}
