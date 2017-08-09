import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorListPage } from './author-list';

@NgModule({
  declarations: [
    AuthorListPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorListPage),
  ],
  exports: [
    AuthorListPage
  ]
})
export class AuthorListPageModule {}
