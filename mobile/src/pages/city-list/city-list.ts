import {Component, ViewChild} from '@angular/core';
import {IonicPage, List, NavController, NavParams, Refresher, ToastController} from 'ionic-angular';
import {City} from "api/models/city";
import {CityStreamPage} from "../city-stream/city-stream";
import {CityDataProvider} from "../../providers/city-data/city-data";

/**
 * Generated class for the CityListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-city-list',
  templateUrl: 'city-list.html',
})
export class CityListPage {

  searching: boolean = false;
  cities: City[] = [];

  @ViewChild('cityList', { read: List }) cityList: List;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public cityProvider: CityDataProvider) {
  }

  ionViewDidLoad() {
    this.loadMyCities();
  }

  private loadMyCities() {
    this.cities = this.cityProvider.loadMyCities();
  }

  toggleSearch() {
    this.searching = !this.searching;
  }

  goToCityStream(city: City) {
    this.navCtrl.push(CityStreamPage, {
      city: city
    });
  }

  doRefresh(refresher: Refresher) {
    this.loadMyCities();

    setTimeout(() => {
      refresher.complete();

      const toast = this.toastCtrl.create({
        message: 'Cities have been updated.',
        duration: 3000
      });
      toast.present();
    }, 1000);
  }

}
