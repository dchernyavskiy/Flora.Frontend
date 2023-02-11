import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasketComponent} from "./basket/basket.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  {path: '', component: BasketComponent, pathMatch: 'full'},
  {path: 'checkout', component: CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule {
}
