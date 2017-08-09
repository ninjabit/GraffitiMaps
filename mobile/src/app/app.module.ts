import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { StreetartloversApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import {CityListPage} from "../pages/city-list/city-list";
import {CityStreamPage} from "../pages/city-stream/city-stream";
import {UploadPage} from "../pages/upload/upload";

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { ArtDataProvider } from '../providers/art-data/art-data';
import { AuthorDataProvider } from '../providers/author-data/author-data';
import { CityDataProvider } from '../providers/city-data/city-data';
import { ToggleSearchBarDirective } from '../directives/toggle-search-bar/toggle-search-bar';

import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { PictureServiceProvider } from '../providers/picture-service/picture-service';
import {AgmCoreModule} from "angular2-google-maps/core";
import {Geolocation} from "@ionic-native/geolocation";
import {StreetartloversCoreModule} from "streetartlovers-core";

@NgModule({
  declarations: [
    StreetartloversApp,
    AboutPage,
    AccountPage,
    LoginPage,
    UploadPage,
    MapPage,
    CityListPage,
    CityStreamPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    ToggleSearchBarDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StreetartloversCoreModule,
    IonicModule.forRoot(StreetartloversApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCafQV4zdyDcwfkvPSzTB4Ch2yVf51ZJaU'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    StreetartloversApp,
    AboutPage,
    AccountPage,
    LoginPage,
    UploadPage,
    MapPage,
    CityListPage,
    CityStreamPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    ArtDataProvider,
    AuthorDataProvider,
    ToggleSearchBarDirective,
    CityDataProvider,
    ImagePicker,
    Camera,
    Geolocation,
    PictureServiceProvider
  ]
})
export class AppModule { }
