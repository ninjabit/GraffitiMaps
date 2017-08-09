import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";
import {ImagePicker} from '@ionic-native/image-picker';
import {UploadFS} from 'meteor/jalik:ufs';
import { _ } from 'meteor/underscore';
// import {DEFAULT_PICTURE_URL} from "api/models";
import {PicturesStore} from "api/collections/pictures";

@Injectable()
export class PictureServiceProvider {

  constructor(
    private platform: Platform,
    private imagePicker: ImagePicker
  ) {}

  select(): Promise<Blob> {
    if (!this.platform.is('cordova') || !this.platform.is('mobile')) {
      return new Promise((resolve, reject) => {
        try {
          UploadFS.selectFile((file: File) => {
            resolve(file);
          });
        }
        catch (e) {
          reject(e);
        }
      });
    }

    return this.imagePicker.getPictures({maximumImagesCount: 1}).then((URL: string) => {
      return this.convertURLToBlob(URL);
    });
  }

  upload(blob: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const metadata = _.pick(blob, 'name', 'type', 'size');

      // if (!metadata.name) {
      //   metadata.name = DEFAULT_PICTURE_URL;
      // }

      const upload = new UploadFS.Uploader({
        data: blob,
        file: metadata,
        store: PicturesStore,
        onComplete: resolve,
        onError: reject
      });

      upload.start();
    });
  }

  convertURLToBlob(URL: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const image = document.createElement('img');

      image.onload = () => {
        try {
          const dataURI = this.convertImageToDataURI(image);
          const blob = this.convertDataURIToBlob(dataURI);
          resolve(blob);
        }
        catch (e) {
          reject(e);
        }
      }
      image.src = URL;
    });
  }

  convertImageToDataURI(image: HTMLImageElement): string {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    const dataURL = canvas.toDataURL('image/png');

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  convertDataURIToBlob(dataURI): Blob {
    const binary = atob(dataURI);

    const charCodes = Object.keys(binary)
      .map<number>(Number)
      .map<number>(binary.charCodeAt.bind(binary));

    return new Blob([new Uint8Array(charCodes)], {type: 'image/jpg'});
  }

}
