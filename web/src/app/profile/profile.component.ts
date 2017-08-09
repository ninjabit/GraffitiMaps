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

  private loadProfile() {
    this.profile = Meteor.user().profile || {
        username: '',
        picture: null
      };
  }
}
