import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorStreamPage } from './author-stream';

@NgModule({
  declarations: [
    AuthorStreamPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorStreamPage),
  ],
  exports: [
    AuthorStreamPage
  ]
})
export class AuthorStreamPageModule {}
