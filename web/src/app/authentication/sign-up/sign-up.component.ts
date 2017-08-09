import { Component, OnInit } from '@angular/core';
import {LoginCredentials} from "angular2-meteor-accounts-ui";
// import { Accounts } from 'meteor/accounts-base';
import {AuthService} from "streetartlovers-core";
import {Router} from "@angular/router";
import {MeteorObservable} from "meteor-rxjs";

export interface SignupCredentials {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  credentials: SignupCredentials;
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

  signup(): void {
    this.resetErrors();
    this.authService.signup(this.credentials)
      .then(() => {
        this.resetCredentialsFields();
        this.router.navigateByUrl('/')
      })
      .catch((error) => {
        this.errors.push(error.reason || "Unknown error");
      });
    // Accounts.createUser(this.credentials, (error) => {
    //   if (error) {
    //     this.errors.push(error.reason || "Unknown error");
    //   }
    //   else {
    //     // this.isDropdownOpen = false;
    //     this.resetCredentialsFields();
    //   }
    // });
  }
  signupFacebook() {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email']
    }, (err) => {
      if (err) {
        // handle error
        console.log(err);
      } else {
        // successful login!
        console.log('facebook login success');
      }
    });

  }

  signupGoogle() {

  }

  signupTwitter() {

  }

  private resetErrors() {
    this.errors = [];
    this.message = "";
  }

  private resetCredentialsFields() {
    this.credentials = { username: '', email: '', password: '' };
  }
}
