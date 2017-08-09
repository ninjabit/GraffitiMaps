import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtsDetailsComponent} from "./arts-details/arts-details.component";
import {ArtsGridItemComponent} from "./arts-grid-item/arts-grid-item.component";
import {ArtsGridComponent} from "./arts-grid/arts-grid.component";
import {ArtsListComponent} from "./arts-list/arts-list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArtsListComponent,
    ArtsGridComponent,
    ArtsGridItemComponent,
    ArtsDetailsComponent,
  ]
})
export class ArtsModule { }
