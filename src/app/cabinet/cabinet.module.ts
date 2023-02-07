import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet/cabinet.component';
import {CommonsModule} from "../commons/commons.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CabinetComponent,
  ],
    imports: [
        CommonModule,
        CabinetRoutingModule,
        CommonsModule,
        FormsModule
    ]
})
export class CabinetModule { }
