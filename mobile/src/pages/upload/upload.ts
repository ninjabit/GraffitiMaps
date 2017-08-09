import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Art} from "api/models/art";

/**
 * Generated class for the UploadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  firstImage: string;
  images = [];
  art: Art;
  location: Location;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let firstImage = this.navParams.get('image');
    this.firstImage = firstImage.url;
    this.images.push(this.firstImage);
    this.location = this.navParams.get('location');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  save() {
    let art = {
      pictures: this.images,
      location: this.location
    }
    this.art = art;
    this.viewCtrl.dismiss(this.art);
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
