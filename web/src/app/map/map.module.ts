import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import {RouterModule} from "@angular/router";
import { AgmCoreModule } from '@agm/core';
import { MapInfoWindowComponent } from './map-info-window/map-info-window.component';
import {SharedModule} from "../shared/shared.module";

const mapRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'map',
    component: MapComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCafQV4zdyDcwfkvPSzTB4Ch2yVf51ZJaU'
    }),
    mapRouting
  ],
  declarations: [
    MapComponent,
    MapInfoWindowComponent
  ]
})
export class MapModule { }
