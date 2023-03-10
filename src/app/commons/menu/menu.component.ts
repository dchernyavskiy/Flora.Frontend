import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {MenuItemComponent} from "./menu-item/menu-item.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit {
  @ContentChildren(MenuItemComponent) items: QueryList<MenuItemComponent> = new QueryList<MenuItemComponent>();

  ngAfterContentInit(): void {
    const activeItems = this.items.filter((item) => item.active);
    if (activeItems.length === 0) {
      this.selectItem(this.items.first);
    }
  }

  selectItem(item: MenuItemComponent) {
    this.items.toArray().forEach(item => item.active = false);
    item.active = true;
  }
}
