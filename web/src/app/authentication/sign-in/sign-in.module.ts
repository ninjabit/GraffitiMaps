import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';

const signinRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'signin',
    component: SignInComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    signinRouting
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
