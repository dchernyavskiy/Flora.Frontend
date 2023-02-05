import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PaginationComponent} from './pagination/pagination.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CommonsModule {
}
