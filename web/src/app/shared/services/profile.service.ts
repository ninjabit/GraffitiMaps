import {Injectable} from "@angular/core";

@Injectable()
export class ProfileService {
  constructor() { }

  getProfile(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (!Meteor.user())
        reject();
      resolve(Meteor.user().profile);
    });
  }

  getProfilePicture() {

  }

  updateProfile() {

  }

  updateProfilePicture() {

  }

  deleteProfile() {

  }
}
