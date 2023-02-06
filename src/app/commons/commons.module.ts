import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PaginationComponent} from './pagination/pagination.component';
import {RouterLink, RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent
    TabComponent,
    TabItemComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PaginationComponent
    TabComponent,
    TabItemComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ]
    FormsModule
})
export class CommonsModule {
}
