import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlantsComponent} from "./plants/plants.component";
import {PlantComponent} from "./plant/plant.component";

const routes: Routes = [
  {path: '', component: PlantsComponent, pathMatch: 'full'},
  {path: ':category', component: PlantsComponent},
  {path: ':category/:id', component: PlantComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
