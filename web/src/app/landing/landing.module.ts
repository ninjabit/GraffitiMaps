import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import {RouterModule} from "@angular/router";


const landingRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: LandingComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    landingRouting
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
