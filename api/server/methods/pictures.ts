import {Picture} from "../models/picture";

Meteor.methods({
    addPicture(picture: Picture) {
        console.log(picture);
        return picture;
    }
});