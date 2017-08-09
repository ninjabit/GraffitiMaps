import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtDetailPage } from './art-detail';

@NgModule({
  declarations: [
    ArtDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtDetailPage),
  ],
  exports: [
    ArtDetailPage
  ]
})
export class ArtDetailPageModule {}
