import {Component, OnDestroy, OnInit} from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform, AlertController, NavController, ModalController } from 'ionic-angular';
import {Camera} from "@ionic-native/camera";
import {PictureServiceProvider} from "../../providers/picture-service/picture-service";
import {MeteorObservable} from "meteor-rxjs";
import {Location} from "api/models/location";
import { Observable, Subscription } from 'rxjs';
import {Geolocation, Geoposition} from "@ionic-native/geolocation";
import {UploadPage} from "../upload/upload";

const DEFAULT_ZOOM = 8;
const EQUATOR = 40075004;
const DEFAULT_LAT = 51.678418;
const DEFAULT_LNG = 7.809007;
const LOCATION_REFRESH_INTERVAL = 500;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage implements OnInit, OnDestroy {
  lat: number = DEFAULT_LAT;
  lng: number = DEFAULT_LNG;
  zoom: number = DEFAULT_ZOOM;
  accuracy: number = -1;
  intervalObs: Subscription;

  searching: boolean = false;
  locating: boolean = false;
  location: Location = {};

  constructor(
    public confData: ConferenceData,
    public platform: Platform,
    private camera: Camera,
    private geolocation: Geolocation,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private pictureService: PictureServiceProvider
  ) {
  }

  ngOnInit() {
    // Refresh location at a specific refresh rate
    this.subscribeToLocation();
    this.unsubscribeFromLocation();

  }

  ngOnDestroy() {
    // Dispose subscription
    this.unsubscribeFromLocation();
  }

  ionViewDidLoad() {

  }

  subscribeToLocation() {
    this.intervalObs = this.reloadLocation()
      .flatMapTo(Observable
        .interval(LOCATION_REFRESH_INTERVAL)
        .timeInterval())
      .subscribe(() => {
        this.reloadLocation();
      });
    this.locating = true;
  }

  unsubscribeFromLocation() {
    if (this.intervalObs) {
      this.intervalObs.unsubscribe();
    }
    this.locating = false;
  }

  toggleSearch() {
    this.searching = !this.searching;
  }

  openCamera() {
    this.takePicture(this.camera.PictureSourceType.CAMERA);
  }

  openRoll() {
    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  panMap() {
    this.unsubscribeFromLocation();
  }

  locateMe() {
    if (!this.locating)
      this.subscribeToLocation();
    else
      this.unsubscribeFromLocation();
  }

  reloadLocation() {
    return Observable.fromPromise(this.geolocation.getCurrentPosition().then((position: Geoposition) => {
      if (this.lat && this.lng) {
        // Update view-models to represent the current geo-location
        this.accuracy = position.coords.accuracy;
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // this.zoom = this.calculateZoomByAccureacy(this.accuracy);
        this.location.lat = this.lat;
        this.location.lng = this.lng;
        this.location.zoom = this.zoom;
      }
    }));
  }

  private calculateZoomByAccureacy(accuracy: number): number {
    // Source: http://stackoverflow.com/a/25143326
    const deviceHeight = this.platform.height();
    const deviceWidth = this.platform.width();
    const screenSize = Math.min(deviceWidth, deviceHeight);
    const requiredMpp = accuracy / screenSize;
    let zoom = ((Math.log(EQUATOR / (256 * requiredMpp))) / Math.log(2)) + 1;
    console.log(deviceHeight, deviceWidth, screenSize, requiredMpp, zoom);
    return zoom;
  }

  private takePicture(sourceType: any) {
    if (sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.pictureService.select().then((blob) => {
        this.sendPicture(blob);
      })
        .catch((e) => {
          this.handleError(e);
        });
    }
    else if (sourceType === this.camera.PictureSourceType.CAMERA && this.platform.is('mobile')) {
      // only allow camera on mobile devices

    } else {
      console.log('Operation not supported yet.');
    }
  }
  sendPicture(blob: Blob): void {
    this.pictureService.upload(blob).then((picture) => {
      console.log('Media added and subscribed');
      // show the AddMedia flow
      let profileModal = this.modalCtrl.create(UploadPage, { image: picture, location: this.location });
      profileModal.onDidDismiss(data => {
        console.log(data);
      });
      profileModal.present();
    });
  }

  handleError(e: Error): void {
    console.error(e);
    const alert = this.alertCtrl.create({
      title: 'Ops',
      message: e.message,
      buttons: ['OK']
    });

    alert.present();
  }
}
