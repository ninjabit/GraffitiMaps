import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamComponent } from './stream.component';
import {RouterModule} from "@angular/router";
import {MasonryModule} from "angular2-masonry";

const streamRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'stream',
    component: StreamComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    MasonryModule,
    streamRouting
  ],
  declarations: [StreamComponent]
})
export class StreamModule { }
