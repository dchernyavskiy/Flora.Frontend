import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'plants', loadChildren: () => import('./plant/plant.module').then(x => x.PlantModule)},
  {path: 'cabinet', loadChildren: () => import('./cabinet/cabinet.module').then(x => x.CabinetModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
