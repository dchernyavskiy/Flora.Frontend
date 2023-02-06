import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PaginationComponent} from './pagination/pagination.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TabComponent} from './tab/tab.component';
import {TabItemComponent} from './tab/tab-item/tab-item.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    TabComponent,
    TabItemComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PaginationComponent,
    TabComponent,
    TabItemComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    FormsModule
  ]
})
export class CommonsModule {
}
