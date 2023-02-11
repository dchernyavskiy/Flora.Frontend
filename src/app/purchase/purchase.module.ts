import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { BasketComponent } from './basket/basket.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { CheckoutComponent } from './checkout/checkout.component';
import {CommonsModule} from "../commons/commons.module";


@NgModule({
  declarations: [
    BasketComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CommonsModule
  ]
})
export class PurchaseModule { }
