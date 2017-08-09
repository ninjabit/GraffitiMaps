import {Profile} from "../models/profile";
import {nonEmptyString} from "./utils";

Meteor.methods({
  updateProfile(profile: Profile): void {
    if (!this.userId) throw new Meteor.Error('unauthorized',
    'User must be logged in');

    check(profile, {
      username: nonEmptyString,
      pictureId: Match.Maybe(nonEmptyString)
    });

    Meteor.users.update(this.userId, {
      $set: {profile}
    });
  }
});
