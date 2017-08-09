import {Art} from "../models/art";
Meteor.methods({
    addMedia(art: Art) {
        console.log(art);
        return art;
    }
});