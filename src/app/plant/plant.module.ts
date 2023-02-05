import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantRoutingModule } from './plant-routing.module';
import { PlantsComponent } from './plants/plants.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import {CommonsModule} from "../commons/commons.module";


@NgModule({
  declarations: [
    PlantsComponent,
    PlantCardComponent
  ],
  exports: [
    PlantCardComponent
  ],
  imports: [
    CommonModule,
    PlantRoutingModule,
    CommonsModule
  ]
})
export class PlantModule { }
