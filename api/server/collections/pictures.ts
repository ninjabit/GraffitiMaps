import {MongoObservable} from "meteor-rxjs";
import {Picture} from "../models/picture";
import {UploadFS} from 'meteor/jalik:ufs';
import * as Sharp from 'sharp';
// import {DEFAULT_PICTURE_URL} from "../models/profile";

export interface PicturesCollection<T> extends MongoObservable.Collection<T> {
  getPictureUrl(selector?: Object | string): string;
}

export const Pictures = new MongoObservable.Collection<Picture>('pictures') as PicturesCollection<Picture>;

export const PicturesStore = new UploadFS.store.GridFS({
  collection: Pictures.collection,
  name: 'pictures',
  filter: new UploadFS.Filter({
    contentTypes: ['image/*']
  }),
  permissions: new UploadFS.StorePermissions({
    insert: picturesPermissions,
    update: picturesPermissions,
    remove: picturesPermissions
  }),
  transformWrite(from, to) {
    // compress picture to 75%
    const transform = Sharp().png({ quality: 75 });
    from.pipe(transform).pipe(to);
  }
});

Pictures.getPictureUrl = function (selector) {
  const picture = this.findOne(selector) || {};
  return picture.url; // || DEFAULT_PICTURE_URL;
};

function picturesPermissions(userId: string): boolean {
  return Meteor.isServer || !!userId;
}
