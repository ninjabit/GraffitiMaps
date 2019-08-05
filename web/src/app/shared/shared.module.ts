import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "./layout/layout.module";
import {MarkerClusterDirective} from "./directives/marker-cluster";
import {AddButtonComponent} from "../add-button/add-button.component";
import {ArtsAddComponent} from "../arts/arts-add/arts-add.component";
import {ImageUploadModule} from "angular2-image-upload";
import { RoundedImageComponent } from './components/rounded-image/rounded-image.component';
import { PillsComponent } from './components/pills/pills.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ImageUploadModule.forRoot(),
  ],
  declarations: [MarkerClusterDirective, AddButtonComponent, ArtsAddComponent, RoundedImageComponent, PillsComponent],
  exports: [LayoutModule, MarkerClusterDirective, AddButtonComponent, ArtsAddComponent],
})
export class SharedModule { }
