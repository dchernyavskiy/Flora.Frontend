import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CommonsModule} from "./commons/commons.module";
import {PlantModule} from "./plant/plant.module";
import {AuthModule, LogLevel} from 'angular-auth-oidc-client';
import {environment} from "../environments/environment";
import {API_BASE_URL} from "./api/api";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    PlantModule,
    AuthModule.forRoot({
      config: {
        authority: environment.authority,
        redirectUrl: environment.redirectUrl,
        postLogoutRedirectUri: environment.postLogoutRedirectUri,
        clientId: 'flora-web-app',
        scope: 'openid profile FloraWebApi offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      }
    }),
  ],
  providers: [{provide: API_BASE_URL, useValue: environment.apiUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
