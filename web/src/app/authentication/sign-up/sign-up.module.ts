import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';

const signupRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'signup',
    component: SignUpComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    signupRouting
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
