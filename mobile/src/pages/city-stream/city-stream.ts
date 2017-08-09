import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CityStreamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-city-stream',
  templateUrl: 'city-stream.html',
})
export class CityStreamPage {

  city: any;
  section: string;

  @ViewChild('mapCanvas') mapElement: ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.city = this.navParams.data.city;
  }

  ionViewDidLoad() {
    let mapEle = this.mapElement.nativeElement;

    let map = new google.maps.Map(mapEle, {
      center: this.city.position,
      zoom: 16
    });

    google.maps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }

}
