import { Component, OnInit } from '@angular/core';
import {Profile} from "api/models/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor() { }

  ngOnInit() {
    this.loadProfile();
  }

  changeProfileImage() {

  }

  private loadProfile() {
    let user = Meteor.user();
    console.log(user);
    this.profile = Meteor.user().profile || {
        name: '',
        picture: null
    };
  }
}
