import {Art} from "../models/art";
import {Arts} from "../collections/arts";

Meteor.methods({
    addArt(art: Art) {
        check(art, Object);
        console.log("Adding art", art);
    },
    updateArt(art: Art) {
        check(art, Object);
        console.log("Updating art", art);
        Arts.collection.update(art._id, {
            $set: {

            }
        })
    },
    removeArt(art: Art) {
        check(art, Object);
        console.log("Removing art", art);
    }
});