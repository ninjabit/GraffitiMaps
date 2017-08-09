import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityStreamPage } from './city-stream';

@NgModule({
  declarations: [
    CityStreamPage,
  ],
  imports: [
    IonicPageModule.forChild(CityStreamPage),
  ],
  exports: [
    CityStreamPage
  ]
})
export class CityStreamPageModule {}
