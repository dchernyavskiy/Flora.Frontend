import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CabinetComponent} from "./cabinet/cabinet.component";

const routes: Routes = [
  {path: '', redirectTo: 'personal-data', pathMatch: 'full'},
  {path: 'personal-data', component: CabinetComponent, data: {personalData: true}},
  {path: 'wishlist', component: CabinetComponent, data: {wishlist: true}},
  {path: 'orders', component: CabinetComponent, data: {orders: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule {
}
