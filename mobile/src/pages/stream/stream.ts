import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArtDetailPage} from "../art-detail/art-detail";

/**
 * Generated class for the StreamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html',
})
export class StreamPage {

  arts: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamPage');
  }

  goToArtDetail(art: any) {
    this.navCtrl.push(ArtDetailPage, {
      art: art
    });
  }

}
