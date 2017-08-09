import {Profile} from "./profile";

export class User implements Meteor.User {
  profile?: Profile;
}
