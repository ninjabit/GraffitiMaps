import {Profile} from "../models/profile";
import {nonEmptyString} from "./utils";

Meteor.methods({
    updateProfile(profile: Profile): void {
        if (!this.userId) throw new Meteor.Error('unauthorized',
            'User must be logged in');

        check(profile, {
            name: nonEmptyString,
            bio: Match.Maybe(nonEmptyString),
            following: Boolean,
            picture: Match.Maybe(Object)
        });

//        Meteor.users.update(this.userId, {
//            $set: {profile}
//        });
    },
    updatePicture(data) {
        if (!this.userId) throw new Meteor.Error('unauthorized',
            'User must be logged in');
        check(data, String);
        return Meteor.users.update(this.userId, { $set: { 'profile.picture': data } });
    }
});
