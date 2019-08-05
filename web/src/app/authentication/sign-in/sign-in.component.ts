import { Component, OnInit } from '@angular/core';
import {LoginCredentials} from "angular2-meteor-accounts-ui";
import {AuthService} from "streetartlovers-core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  credentials: LoginCredentials;
  errors: Array<string>;
  message: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.resetCredentialsFields();
    this.resetErrors();
  }

  ngOnInit() {
  }

  signin(): void {
    this.resetErrors();

    let email: string = this.credentials.email;
    let password: string = this.credentials.password;

    this.authService.signin(this.credentials)
      .then(() => {
        this.resetCredentialsFields();
        this.router.navigateByUrl('/')
      })
      .catch((error) => {
        this.errors.push(error.reason || "Unknown error");
      });
  }

  private resetErrors() {
    this.errors = [];
    this.message = "";
  }

  private resetCredentialsFields() {
    this.credentials = { email: '', password: '' };
  }

}
