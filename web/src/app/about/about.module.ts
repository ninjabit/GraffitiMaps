import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {RouterModule} from "@angular/router";

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'about',
    component: AboutComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
