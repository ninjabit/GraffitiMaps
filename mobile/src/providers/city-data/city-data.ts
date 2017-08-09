import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {City} from "api/models/city";

/*
  Generated class for the CityDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CityDataProvider {

  constructor(public http: Http) {
    console.log('Hello CityDataProvider Provider');
  }

  loadMyCities(): City[] {
    return [
      {
        "name": "Barcellona",
        "picture": "assets/img/cities/Barcellona.png",
        "arts": [],
        "artsNumber": 100,
        "spotsNumber": 40,
        "artistsNumber": 10,
        "position": {
          "lat": 41.390205,
          "lng": 2.154007
        }
      },
      {
        "name": "Milano",
        "picture": "assets/img/cities/Barcellona.png",
        "arts": [],
        "artsNumber": 140,
        "spotsNumber": 30,
        "artistsNumber": 10,
        "position": {
          "lat": 45.532646,
          "lng": 9.039612
        }
      },
    ];
  }
}
