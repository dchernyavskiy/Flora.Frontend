import {AfterContentInit, Component, ContentChild, ContentChildren, QueryList} from '@angular/core';
import {TabItemComponent} from "../tab/tab-item/tab-item.component";
import {MenuItemComponent} from "./menu-item/menu-item.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit {
  // @ts-ignore
  @ContentChildren(MenuItemComponent) items: QueryList<MenuItemComponent>;

  ngAfterContentInit(): void {
    let activeItems = this.items.filter((item) => item.active);
    if (activeItems.length === 0) {
      this.selectItem(this.items.first);
    }
  }

  selectItem(item: MenuItemComponent) {
    this.items.toArray().forEach(item => item.active = false);
    item.active = true;
  }
}
