import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CommonsModule} from "./commons/commons.module";
import {PlantModule} from "./plant/plant.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    PlantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
