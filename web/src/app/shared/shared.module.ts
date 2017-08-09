import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "./layout/layout.module";
import {MarkerClusterDirective} from "./directives/marker-cluster";
import {AddButtonComponent} from "../add-button/add-button.component";
import {ArtsAddComponent} from "../arts/arts-add/arts-add.component";
import {ImageUploadModule} from "angular2-image-upload";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ImageUploadModule.forRoot(),
  ],
  declarations: [MarkerClusterDirective, AddButtonComponent, ArtsAddComponent],
  exports: [LayoutModule, MarkerClusterDirective, AddButtonComponent, ArtsAddComponent],
})
export class SharedModule { }
