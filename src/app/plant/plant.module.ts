import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlantRoutingModule} from './plant-routing.module';
import {PlantsComponent} from './plants/plants.component';
import {PlantCardComponent} from './plant-card/plant-card.component';
import {CommonsModule} from "../commons/commons.module";
import {PlantComponent} from './plant/plant.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SwiperModule} from "swiper/angular";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PlantsComponent,
    PlantCardComponent,
    PlantComponent
  ],
  exports: [
    PlantCardComponent
  ],
    imports: [
        CommonModule,
        PlantRoutingModule,
        CommonsModule,
        CarouselModule,
        FontAwesomeModule,
        SwiperModule,
        FormsModule
    ]
})
export class PlantModule {
}
