import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet/cabinet.component';
import {CommonsModule} from "../commons/commons.module";
import {FormsModule} from "@angular/forms";
import {PurchaseModule} from "../purchase/purchase.module";
import { WishlistItemComponent } from './cabinet/wishlist-item/wishlist-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PlantModule} from "../plant/plant.module";


@NgModule({
  declarations: [
    CabinetComponent,
    WishlistItemComponent,
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    CommonsModule,
    FormsModule,
    PurchaseModule,
    FontAwesomeModule,
    PlantModule
  ]
})
export class CabinetModule { }
