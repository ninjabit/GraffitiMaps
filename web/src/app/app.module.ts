import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {LandingModule} from "./landing/landing.module";
import {RouterModule} from "@angular/router";
import {AuthenticationModule} from "./authentication/authentication.module";
import {AuthService} from "streetartlovers-core";
import {AboutModule} from "./about/about.module";
import {StreamModule} from "./stream/stream.module";
import {MapModule} from "./map/map.module";
import {ProfileModule} from "./profile/profile.module";
import {AgmCoreModule} from '@agm/core';
import {MasonryModule} from 'angular2-masonry';
import {ArtsModule} from "./arts/arts.module";
import {SearchBarComponent} from './search-bar/search-bar.component';

const appRoutes = [];

const rootRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    LandingModule,
    AboutModule,
    ArtsModule,
    StreamModule,
    MapModule,
    AuthenticationModule,
    ProfileModule,
    HttpModule,
    rootRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCafQV4zdyDcwfkvPSzTB4Ch2yVf51ZJaU'
    }),
    MasonryModule
  ],
  providers: [AuthService],
  // providers: [AuthService, UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
