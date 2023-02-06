import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CabinetComponent} from "./cabinet/cabinet.component";

const routes: Routes = [
  {path: '', component: CabinetComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule {
}
